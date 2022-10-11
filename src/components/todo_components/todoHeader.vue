<template>
    <div class="d-flex justify-content-between align-items-center">
        <h4 class="card-title card-title-dash">Todo list</h4>
        <div class="add-items d-flex mb-0">
            <!-- <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?"> -->
            <button class="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p" @click="$emit('show-add-form')">
                <i class="mdi mdi-plus"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'todoHeader',
    data () {
        return {}
    },
    props: { },
    methods: { }
}
</script>
