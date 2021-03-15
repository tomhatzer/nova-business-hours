# Nova Business Hours Field

This package offers a field for Nova to easily manage your business hours.

## Install

```bash
composer require tomhatzer/nova-business-hours
```

## Usage

Add this line to your Nova resource fields array:
```php
NovaBusinessHours::make('Business hours', 'business_hours'),
```

## Compatibility

### Using this package with spatie/open-hours

Create a getter for your business hours field in your model like this:

```php
public function getBusinessHoursAttribute($value)
{
    $jsonDecoded = json_decode($value);

    return collect($jsonDecoded)->transform(function($day) {
        return array_filter(
            array_map(function($item) {
                if($item->isOpen) {
                    return substr_replace($item->open, ':', 2, 0) . '-' . substr_replace($item->close, ':', 2, 0);
                }

                return null;
            }, $day)
        );
    })->all();
}
```

In this case the fields name will be `business_hours`. Customize this according to your database column name.

Afterwards you can use it to fill the `OpeningHours` class with your existing business hours like this:

```php
// Add the use at the top of each file where you want to use the OpeningHours class:
use Spatie\OpeningHours\OpeningHours;

// Get your model instance
$model = Model::find(1);

// Fill the OpeningHours class with your business hours
$openingHours = OpeningHours::create($model->business_hours);
```
