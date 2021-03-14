<?php

namespace Tomhatzer\NovaBusinessHours;

use Laravel\Nova\Fields\Field;
use Laravel\Nova\Http\Requests\NovaRequest;
use function array_merge;
use function json_decode;

class NovaBusinessHours extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-business-hours';

    /**
     * Hydrate the given attribute on the model based on the incoming request.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @param  string  $requestAttribute
     * @param  object  $model
     * @param  string  $attribute
     * @return void
     */
    protected function fillAttributeFromRequest(NovaRequest $request, $requestAttribute, $model, $attribute)
    {
        if ($request->exists($requestAttribute)) {
            $value = json_decode($request[$requestAttribute], true);
            $weekDays = [
                'sunday' => null,
                'monday' => null,
                'tuesday' => null,
                'wednesday' => null,
                'thursday' => null,
                'friday' => null,
                'saturday' => null
            ];
            $value = array_merge($weekDays, $value);

            $model->{$attribute} = $value;
        }
    }

    /**
     * Prepare the field for JSON serialization.
     *
     * @return array
     */
    public function jsonSerialize()
    {
        return parent::jsonSerialize();
    }
}
