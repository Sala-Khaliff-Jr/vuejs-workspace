new Vue({
    el:'.app',
    data:{
        attachRed : false,
        attachBlue : true,
        color:"blue"
    },
    computed:{
        swapColor:function(){
            return{
                makeblue : !this.attachBlue,
                // makered : this.attachRed,
                
            }
        },
        myStyle : function(){
            return{
                backgroundColor : this.color,

            }
        }
    }
})