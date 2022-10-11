<template>
    <div class="card">
        <div class="card-body">
            <form action="#" class="todo-form" @submit.prevent="submit">
                <div class="form-group" ref="day">
                    <label>Day</label>
                    <input
                        type="date"
                        class="form-control"
                        placeholder="Date"
                        v-model="day"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect3">Priority</label>
                    <select class="form-control form-control-sm" v-model="priority">
                        <option>Select</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>                
                <div class="form-group">
                    <label>Text</label>
                    <textarea
                        type="text"
                        class="form-control"
                        placeholder="Text"
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
            text: 'hello'
        };
    },
    props: ["list"],
    methods: {
        async submit(e) {
            if (this.day=='') {
                //console.info('%c%o', 'color: red;font-size:12px', 'Here I am');
                console.info('%cthis.day: %o', 'color: red;font-size:12px', this.$refs["day"]);
                this.$refs["day"].classList.add('highlight')
            } else {
                this.$emit('add-todo-db', this);

                this.day = '';
                this.priority = '';
                this.text = '';      
            }
            
            
            
        }
    },
};
</script>
<style scoped lang="scss">
.todo-form {
    .form-group {
        &.highlight {
            background-color: red;
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