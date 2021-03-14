<template>
  <default-field :field="field" :errors="errors" :show-help-text="showHelpText">
    <template slot="field">
        <business-hours
            :days="value"
            :id="field.name"
            :class="errorClasses"
            :localization="locals"
            :hourFormat24="true"
            :switchWidth="120"
            @updated-hours="updatedHours"
        ></business-hours>
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import trans from '../translations'

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ['resourceName', 'resourceId', 'field'],

  data() {
      return {
          defaultValues: {
              sunday: [
                  {
                      open: '',
                      close: '',
                      id: '5ca5578b0c5c7',
                      isOpen: false
                  }
              ],
              monday: [
                  {
                      open: '',
                      close: '',
                      id: '5ca5578b0c5d1',
                      isOpen: false
                  }
              ],
              tuesday: [
                  {
                      open: '',
                      close: '',
                      id: '5ca5578b0c5d8',
                      isOpen: false
                  }
              ],
              wednesday: [
                  {
                      open: '',
                      close: '',
                      id: '5ca5578b0c5df',
                      isOpen: false
                  }
              ],
              thursday: [
                  {
                      open: '',
                      close: '',
                      id: '5ca5578b0c5e6',
                      isOpen: false
                  }
              ],
              friday: [
                  {
                      open: '',
                      close: '',
                      id: '5ca5578b0c5ec',
                      isOpen: false
                  }
              ],
              saturday: [
                  {
                      open: '',
                      close: '',
                      id: '5ca5578b0c5f8',
                      isOpen: false
                  }
              ]
          },
          locals: trans
      }
  },

  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
        this.value = {
            ...this.defaultValues,
            ...JSON.parse(this.field.value),
        }
        console.log('set initial value to', this.value)
    },

    updatedHours(val) {
      this.value = {
          ...this.defaultValues,
          ...this.value,
          ...val
      }
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.field.attribute, JSON.stringify(this.value || this.defaultValues))
    },
  },
}
</script>
