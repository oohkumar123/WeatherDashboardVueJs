<template>
    <div class="d-flex justify-content-between align-items-center" style="flex-direction: column">
        <div style="display:flex; justify-content:space-between; width:100%">
            <h4 class="card-title card-title-dash">Todo list</h4>
            <div class="add-items d-flex mb-0">
                <button class="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p" @click="$emit('show-add-form')">
                    <i class="mdi mdi-plus"></i>
                </button>
            </div>
        </div>
        <div class="sort-container">
            <select v-on:change="displayValue()" v-model="sort">
                <option disabled value="">Display by Priority</option>
                <option v-bind:key="item" v-for="(item, key, index) in displayItems" v-bind:value="key">{{item.charAt(0).toUpperCase() + item.slice(1)}}</option>
            </select>
            <div class="selected-sort">{{displayItems[sort]||'all'}}</div>
        </div>
        <div class="sort-container">
            <button class="btn btn-rounded btn-primary text-white" @click="$emit('sort-toggle')">
                Toggle Sort
            </button>
            <button class="btn btn-rounded btn-success text-white orderBy">
                {{ this.displayOrder () }}
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'todoHeader',
    data () {
        return {
            sort:'',
            orderBy: this.$store.state.direction,
            displayItems: {'':'all', 'a':'high', 'b':'medium', 'c':'low'}
        }
    },
    props: { },
    mounted () { },
    methods: { 
        displayValue () {
            this.$emit('display-value', this.sort);
        },
        displayOrder () {
            return this.$store.state.direction
        }
    }
}
</script>
<style scoped lang="scss">
.sort-container {
    display:flex; 
    justify-content:space-between; 
    width:100%; 
    margin-bottom: 20px;
    select {
        color:black;
        font-size: 12px;
        option {
            text-transform: capitalize;
            color: red;
        }
    }
    .selected-sort {
        color:#fff;
        font-size: 12px;
        background-color: #1f3bb3;
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 10px;
        text-transform: capitalize;
        font-weight: 600;
        padding-top: 1px;
    }
    .btn.orderBy {
        text-transform:capitalize;
    }
}
</style>
