<template>
    <div class="container">
        <section class="header">
            <div class="header_left">
                <div class="header_search">
                    <input type="text" name="" id="" placeholder="Search">
                    <a href=""><v-icon class="icon-search" name="search" /></a>
                </div>
                <div class="folder">
                    <div class="header_upload">
                        <v-icon class="icon-upload" name="cloud-upload-alt" />
                        <a href="">Upload</a>
                    </div>
                    <div class="header_folder">
                        <v-icon class="icon-folder" name="folder-plus"/>
                        <a href="">New Folder</a>
                    </div>
                </div>
                <div class="header_left">
                    <a href=""><img src="./../assets/imgs/list.svg" alt=""></a>
                    <a href=""><img src="./../assets/imgs/gridFill.svg" alt=""></a>
                </div>
            </div>
            <section class="body_folder">
                <h3>Folder</h3>
                <div class="row" v-for="(img,index) in imgsFolder" :key="index">
                    <div class="col-2" v-for="(parImg) in parentImgFolder" :key="parImg.id">
                        <div class="title"><span>Photos</span></div>
                        <div class="row">
                            <div class="col-4" v-for="(imgs) in parentImgFolder" :key="imgs.id">
                            <img :src="imgs.url" alt="" >  
                            <!-- <img src="./../assets/imgs/mua.jpg" alt="" > -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="body_file">
                <h3>All File</h3>
                <div class="row" v-for="(img) in imgsFile" :key="img.id" >
                    <div class="col-2" v-for="(parImg) in parentImgFile" :key="parImg.id">
                        <img :src="parImg.url" alt="" >
                        <!-- <img src="./../imgs/mua.jpg" alt="" > -->
                        <div class="click_icon">
                            <ul>
                                <li><img src="./../assets/imgs/mat.svg" alt=""></li>
                                <li><img src="./../assets/imgs/tich.svg" alt=""></li>
                            </ul>
                        </div>
                    </div>   
                </div>
            </section>
        </section>

    </div>
</template>

<script>
export default {
    data() {
            return {

                imgsFolder: [
                    { url: '', id:10 ,},
                ],
                parentImgFolder: [
                    { url: './../assets/imgs/mua.jpg' , id:1},
                    { url: './../assets/imgs/mua.jpg' , id:2},
                    { url: './../assets/imgs/mua.jpg' , id:3},
                    { url: './../assets/imgs/mua.jpg' , id:4},
                    { url: './../assets/imgs/mua.jpg' , id:5},
                    { url: './../assets/imgs/mua.jpg' , id:6},
                ],


                imgsFile: [
                    { url: '' },
                ],
                parentImgFile: [
                    { url: './../assets/imgs/mua.jpg' , id:1},
                    { url: './../assets/imgs/mua.jpg' , id:2},
                    { url: './../assets/imgs/mua.jpg' , id:3},
                    { url: './../assets/imgs/mua.jpg' , id:4},
                    { url: './../assets/imgs/mua.jpg' , id:5},
                    { url: './../assets/imgs/mua.jpg' , id:6},
                ]
                
            }
        }

}
</script>

<style scoped>
    @import './../assets/scss/header.css';
    @import './../assets/scss/reset.css';
</style>
