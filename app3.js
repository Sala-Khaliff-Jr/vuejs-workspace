new Vue({
    el:'.app',
    data:{
        hello : 'wassup',
        show : true,
        element:'',
        animals:['cats','dogs','chicken'],
        persons : [
            {name:'sala',age:20,height:5.11},
            {name:'somwy',age:20,height:5.8},
        ]
    },
    methods:{
        // inserts the element into the animals array
        pushInto:function(element){
            // if length is less than 1 message cnnot be pushed
            if (element.length < 1){
                console.log(element.length);
                return;
            }
            else{
                this.animals.push(element);
                this.element = '';
            }   
  
        }
    }
})
