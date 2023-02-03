<template>
    <div class="list-wrapper">
        <ul class="todo-list todo-list-rounded" >
            <li class="d-block mb-3" :key="data.id" v-for="data in editedToDoList" :class="{ high: data.high, medium: data.medium, low: data.low }">
                <div class="form-check w-100 mt-0">
                    <div class="text-small me-3 priority" :class="{ hight: data.high, mediumt: data.medium, lowt: data.low }">{{displayItems[data.priority]}}</div>
                    <div class="text-small me-3 title">{{data.text}}</div>
                    <div class="text-small me-3 date">{{data.day}}</div>
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
            isActive: true,
            displayItems: {'':'all', 'a':'high', 'b':'medium', 'c':'low'}
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
                    case 'a':
                        i.high = true;
                        break;
                    case 'b':
                        i.medium = true;
                        break;
                    case 'c':
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
            &:last-child {
                padding: 5px 10px;
            }
            
            .text-small {
                &.priority {
                    font-size: 12px;
                    padding-bottom: 3px;

                    color: var(--bs-primary);
                    &.hight {
                        color:#349292;
                    }
                    &.mediumt {
                        color:#1723BD;
                    }
                    &.lowt {
                        color:#bd5717;
                    }
                }
                &.title {
                    font-weight: bold;
                    font-size: 15px;
                    border-top: dotted 1px lightgrey;
                    padding-top: 3px;
                    padding-bottom: 3px;
                    border-bottom: dotted 1px lightgrey;
                }
                &.date {
                    padding-top: 3px;
                    font-size: 12px;
                }

            }


            &.high {
                border: 1px solid #349292;
            }
            &.medium {
                border: 1px solid #1723BD;
            }
            &.low {
                border: 1px solid #bd5717;
            }
            .form-check {
                margin-bottom: 0;
                label {
                    line-height: normal;
                }
                &>div {
                    white-space: normal;
                    line-height: 130%;
                    padding-bottom:0;
                }
            }
            .button-section {
                border: 0;
                width: 50px;
                font-size: 10px;
                line-height: normal;
            }
        }

    }
    
    

</style>
