<template>
    <div class="card">
        <div class="card-body">
            <form action="#" class="todo-form" @submit.prevent="submit">
                <div class="form-group message" v-if="showmessage">
                    <p>Please fill in all the fields</p>
                </div>
                <div class="form-group" ref="day">
                    <label>Day</label>
                    <input
                        type="date"
                        class="form-control"
                        v-model="day"
                    />
                </div>
                <div class="form-group" ref="priority">
                    <label for="exampleFormControlSelect3">Priority</label>
                    <select class="form-control form-control-sm" v-model="priority">
                        <option value="a">High</option>
                        <option value="b">Medium</option>
                        <option value="c">Low</option>
                    </select>
                </div>                
                <div class="form-group" ref="text">
                    <label>Text</label>
                    <textarea
                        type="text"
                        class="form-control"
                        v-model="text"
                        rows="4">
                    </textarea>
                </div>
                <input type="submit" class="btn btn-primary me-2" value="Submit">
                <input type="reset" class="btn btn-light me-2" value="Cancel">
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: "todoAddForm",
    data() {
        return {
            day: '',
            priority: 'high',
            text: '',
            showmessage: false
        };
    },
    props: ["list"],
    methods: {
        async submit(e) {
            this.showmessage = false;
            this.$refs["day"].classList.remove('highlight')
            this.$refs["text"].classList.remove('highlight')

            
            if (this.day=='') {
                this.$refs["day"].classList.add('highlight')
                this.showmessage = true;
                return false;
            } else if (this.text=='') {
                this.$refs["text"].classList.add('highlight')
                this.showmessage = true;
                return false;
            } else {
                this.$emit('add-todo-db', this);
                this.day = '';
                this.priority = '';
                this.text = '';      
            }
        }
    }
};
</script>
<style scoped lang="scss">
.todo-form {
    .form-group {
        &.highlight {
            border: 1px solid red;
            padding: 10px;
        }
        &.message {
            margin-bottom: 0;
            p {
                margin-bottom: 0;
                color: red;
            }
        }
    }
}




.home-tab {
    .btn {
        color: white
    }
}
.btn-light.btn-light {
    color: white;
    background-color: red;
}
textarea.form-control {
    height: auto;
}
.form-control {
    padding-left: 0.375rem;
    line-height: normal;
}
</style>