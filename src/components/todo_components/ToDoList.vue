
<template>
    <!-- COMPONENT:ToDoList -->
    <div class="card card-rounded">
        <div class="card-body">
            <div class="row">
                <div class="col-lg-12">
                    <todoHeader @show-add-form="showAddForm" @display-value="displayValue" @sort-toggle="sortToggle"></todoHeader>
                    
                    <todoAddForm v-show="!showForm" @add-todo-db="addToDos"></todoAddForm>
                    <todoListItems :list="list" v-show="showForm" @delete-todo-db="deleteToDos"></todoListItems>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebaseModel from "../api/firebaseModel";
import todoHeader from "../todo_components/todoHeader";
import todoAddForm from "../todo_components/todoAddForm";
import todoListItems from "../todo_components/todoListItems";

export default {
    name: "ToDoList",
    components: {
        todoHeader,
        todoListItems,
        todoAddForm
    },
    data () {
        return {
            list: [],
            showForm : true,            
            fbm : new firebaseModel()
        }
    },
    mounted () {
        this.fetchToDos();
    },
    methods: {
        
        fetchToDos () {
            this.fbm.fetch().then ((data)=>{
                this.list = data;
            });
        },
        
        addToDos (data) {
            this.fbm.add (data).then(()=>{
                this.showForm = !this.showForm;
                this.list = [];
                this.fetchToDos ();
            });
        },
        
        deleteToDos (id) {
            this.fbm.delete (id).then(()=>{
                this.list = [];
                this.fetchToDos ();
            });
        },
        displayValue (sort) {
            this.fbm.fetchValue(sort).then ((data)=>{
                this.list = data;
            });
        },
        sortToggle () {
            this.$store.dispatch('changeSortDirection');
            let sort = this.$store.getters.getSortDirection;
            this.fbm.sortToggle(sort).then ((data)=>{
                this.list = data;
            });
        },
        // supporting functions
        showAddForm () {
            this.showForm = !this.showForm;
        }
    }
}
</script>

<style scoped lang="scss">
</style>