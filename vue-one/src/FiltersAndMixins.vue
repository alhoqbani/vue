<template>
    <div>
        <h3>My name from globale mixin {{author}} </h3>
        <h4> And local mixin says: {{lengthAware}}</h4>
        <input class="form-control" v-model="name">
        <hr>
        <div class="row">
            <div class="col-sm-12">
                <dl>
                    <dt>Mixin Method putInQoutes</dt>
                    <dd>{{putInQoutes(name)}}</dd>

                    <dt>Local Filter Capitalize</dt>
                    <dd>{{name | capitalize}}</dd>

                    <dt> Global flipIt</dt>
                    <dd>{{name | flipIt}}</dd>

                    <dt>Global howMany</dt>
                    <dd>{{name | howMany}}</dd>

                    <dt>Computed fixed</dt>
                    <dd>{{fixed}}</dd>


                </dl>


            </div>
        </div>
    </div>
</template>

<script>
    const localmizin = {
        date: function () {
            return {
                localMixin: 'my local mixin',
            }
        },
        computed: {
            lengthAware: function () {
                if (!this.age) return;
                return this.age + ' From mixin'
            }
        }
    }

    export default {
        data: function () {
            return {
                name: '',
                age: 31,
            }
        },

        filters: {
            capitalize: function (value) {
                return value.toUpperCase();
            }
        },
        computed: {
            fixed: function (value) {
                console.log(value);
                return this.name + ' Alhoqbani ';

            }
        },
        mixins: [localmizin],
    }
</script>

