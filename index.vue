<template>
<div>
        <div class="bg-purple-600  p-4  flex justify-between items-center">
        <div class="flex items-center">

            <!-- navbar -->
        <div class="rounded-full  w-20 bg-white" >
            <img :src="logo" alt="logo" class=" mr-2" srcset="">
        </div>
        <a href="#" class="inline-block p-2 text-purple-300 mr-2 hover:text-purple-100">About</a>
        <a href="# "  class="inline-block p-2 text-purple-300 hover:text-purple-100">Contact</a>
        </div>

        <!-- login -->
        <div>
        <a href="/login" class="inline-block p-2 text-purple-300  hover:text-purple-100 mr-2">Login</a>
        <a href="/register" class="inline-block p-2 text-purple-700 bg-purple-400 hover:bg-purple-300 hover:text-purple-700 py-2 px-4 text-lg rounded transition ease-in duration-150">Sign-up</a>
     </div>
     <!-- login end -->


        </div>
        <!-- navbar end -->




        <!-- hero -->
       <div class="md:flex justify-between py-20 px-10 bg-gradient-to-r from-purple-200 to-purple-500  text-purple-100">
        <!-- left -->
        <div class="md:w-1/2 mb-10 md:mb-0 md:block  flex justify-center">
                
        <div class=" flex mx-auto justify-center mb-4">
             <!-- <img src="img/ama.jpg" alt="ama" class="rounded-full mr-2" width="200" srcset=""> -->

         </div>
            <div class="px-4 mx-auto text-center">
            <h2 class="text-2xl md:text-4xl lg:text-5xl text-white mb-6 ">Codjo Software LLC</h2>
            <div class="text-white mb-6">
                   <h2 class="text-2xl">Computer Software Products</h2> <br>
                   Application Development, <br>
               Task Automation with Programming <br>
                Custom Software Development
                </div>

            <a href="#" class="inline-block py-3 px-6 text-purple-300 bg-purple-100 hover:bg-purple-400 mr-2 text-lg rounded" @click="test()">Learn More</a>
            <a href="#" class="inline-block py-3 px-6 bg-yellow-300 text-yellow-700 hover:bg-yellow-400  text-lg rounded">Products</a>
        </div>
     </div>




          <!-- right -->
        <div class="md:w-1/2">
        <img src="img/mac.jpg" alt="photo" class="w-full hero rounded shadow-2xl" srcset="">

        </div>
        </div>
        <!-- hero end -->




     <!-- features  -->
     <div class="md:flex py-16 px-10 bg-purple-400 text-purple-100 text-center">
         <div class="mr-2 text-center mt-8 transform transition duration-500 hover:scale-150">
             <img src="img/one.webp"  class="w-full  mb-4 rounded border-solid border-2 border-red-100" alt="one">
             <p>one</p>
         </div>
         <div class="mr-2 text-center">
             <img src="img/six.webp" class="w-full  mb-4 rounded border-solid border-2 border-red-100" alt="two">
             <p>two</p>
         </div>
         <div class="mr-2 text-center mt-8">
             <img src="img/five.webp" class="w-full  mb-4 rounded border-solid border-2 border-red-100" alt="three">
             <p>three</p>
         </div>
         <div class="mr-2 text-center">
             <img src="img/four.webp"  class="w-full  mb-4 rounded border-solid border-2 border-red-100" alt="four">
             <p>four</p>
         </div>
     </div>

     <!-- footer + newsletter -->

     <div class="p-10 bg-purple-900 md:flex justify-between">
         
        <!-- right -->
        <div class="md:w-1/2"> 
            <h3 class="text-lg mb-2 text-white">Join the news letter</h3>
            <form action="#" class="flex">
                <input type="email" name="" id="" class="w-full rounded-l py-2 px-3 outline-none focus:bg-purple-200">
                <button class="bg-red-200 rounded-r text-red-500 text-lg px-4 hover:bg-red-400">Join</button>
            </form>
        </div>


        <!-- left  -->
        <div class="flex items-center text-white">
            Copyright &copy; Codjo 2021 - Infinity
        </div>
 </div>
 </div>
</template>

<style scoped>
   </style>
<script>
    export default {
        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            laravelVersion: String,
            phpVersion: String,
        },
        data() {
            return {
            logo : "./logo.png"
            }
        },
        methods: {
                    test : async () => {
                        console.log("kojo yeboah")
                        await axios.post('api/user-data', {
                            message : "something here"
                                
                            })
                            .then(response => {
                                        console.log("post message controller hit")
                                        if (response.status == 201) {
                                        console.log(response)
                                    }
                             })
                             .catch(error => {
                                        console.log(error)
                                        })
                                },
               
                sendmail (){
                     (async () => {

                    const rawResponse = await fetch('https://codojsoft.herokuapp.com/api/markdown', {
                        method: 'POST',
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({a: 1, b: 'Textual content'})
                    });
                    const content = await rawResponse.json();

                    console.log({ content });
                    })();
                },
                userData(){
                    (async () => {
                                        console.log("post message controller hit")

                       await axios.post('api/user-data', {
                                message : "something here"
                                
                                })
                            .then(response => {
                                        console.log("post message controller hit")
                                        if (response.status == 201) {
                                        console.log(response.data)
                                        this.message = '';
                                    }
                             })
                             .catch(error => {
                                        console.log(error)
                            })
                    
                        })

                    }
                },
                created() {
                    this.userData();
                     }

            }

           
   
</script>
