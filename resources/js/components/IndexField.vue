<template>
    <ul style="list-style: none;" class="m-0 p-0">
        <li v-for="(times, day) in fieldValue" class="m-0 p-0 mb-2">
            {{ translateDay(day) }}:
            <div v-for="time in times" class="pl-2 py-1">
                <span v-if="time.isOpen">{{ formatTime(time.open) }} - {{ formatTime(time.close) }}</span>
                <span v-else>Geschlossen</span>
            </div>
        </li>
    </ul>
</template>

<script>
import trans from '../translations';

export default {
    props: ['resourceName', 'field'],
    data() {
        return {
            fieldValue: {
                sunday: {},
                monday: {},
                tuesday: {},
                wednesday: {},
                thursday: {},
                friday: {},
                saturday: {},
            }
        }
    },
    created() {
        this.fieldValue = {
            ...this.fieldValue,
            ...JSON.parse(this.field.value)
        }
    },
    methods: {
        translateDay(day) {
            return trans.days[day]
        },
        formatTime(date) {
            return date.substr(0, 2) + ':' + date.substr(2, 2)
        }
    }
}
</script>
