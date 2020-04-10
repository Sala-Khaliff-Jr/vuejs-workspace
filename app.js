new Vue({
    el:'#app',
    data:{
        title:'some random title',
        heading:'this is some heading',
        dynamic_text:'This will change on input',
        name:'sala',
        link:'http://google.com',
        once:'this is once',
        htmlElement:'<a href="https://youtube.com">Youtube</a>',
        count:0,
        x_coord:0,
        y_coord:0,
        counter:0,
        secondcounter:0,
    },
    computed:{
        compFunc:function(){
            return this.counter > 5 ? "Greater THan 5" : "Less than 5";
        }
    },
    watch:{
        name: function(value){
            var vm = this;
            setTimeout(function(){
                vm.name = "sala";
            },5000);           
        }
    },
    methods:{
        changeTitle:function(event){
            this.dynamic_text = event.target.value;
        },
        sayHello: function(data){
            this.once = 'changed';
            return this.heading;
        },
        increment: function(){
            this.count++;
        },
        updateCoords: function(event){
            this.x_coord = event.clientX;
            this.y_coord = event.clientY;
        },
        alertMe : function(){
            alert('alert');
        },
        incrementCounter:function(){
            return this.counter;
        }

    }
})