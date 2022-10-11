<template>
    <div class="list-wrapper">
        <ul class="todo-list todo-list-rounded" >
            <li class="d-block mb-3" :key="data.id" v-for="data in editedToDoList" :class="{ high: data.high, medium: data.medium, low: data.low }">
                <div class="form-check w-100 mt-0">
                    <div class="text-small me-3">{{data.text}}</div>
                    <div class="text-small me-3">{{data.day}}</div>
                </div>
                <div class="d-flex button-section">
                    <button @click="deleteItem(data.id)" class="btn-warning" onclick="confirm('Are you sure?')">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'todoList',
    data () {
        return {
            isActive: true
         }
    },
    props: ['list'],
    methods: {
        deleteItem(id) {
            this.$emit('delete-todo-db', id);
        }
    },
    computed: {
        editedToDoList () {
            let newList = this.list.filter((i)=>{
                switch(i.priority) {
                    case 'high':
                        i.high = true;
                        break;
                    case 'medium':
                        i.medium = true;
                        break;
                    case 'low':
                        i.low = true;
                        break;
                    default:
                        // code block
                }
                return i;
            })
            return newList;
        }
    }
}
</script>

<style scoped lang="scss">
    .todo-list-rounded {
        li {
            padding: 5px 10px;


            &.high {
                border: 1px solid #4FEEEE;
            }
            &.medium {
                border: 1px solid #1723BD;
            }
            &.low {
                border: 1px solid #1723BD;
            }
            .form-check {
                margin-bottom: 0;
                label {
                    line-height: normal;
                }
            }
            .button-section {
                border: 0;
            }
        }

    }
    
    

</style>
