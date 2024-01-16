<script setup>

</script>
<template>
    <v-app>
        <v-container class="DesignHeader">
            <v-app-bar density="prominent" scroll-behavior="hide fade-image" scroll-threshold="1000"
                image="https://picsum.photos/1920/1080?random">
                <v-container class="ComponentsHeader">
                    <v-toolbar-items>
                        <v-container class="Title"> <div class="text-h5">Zootopía</div></v-container>

                        <v-container class="Buttons">
                            <v-btn variant="tonal" color="#386F5B"> Log out
                                
                            </v-btn>
                       

                        
                            <v-btn prepend-icon="$plus" variant="tonal" color="#386F5B">
                                Add specimen
                            </v-btn>
                        </v-container>


                    </v-toolbar-items>
                </v-container>
            </v-app-bar>
        </v-container>
    </v-app>
</template>


<!-- <template>
    <v-toolbar image="">
        <template v-slot:prepend>
            <div class="text-h5">Zootopía</div>
        </template>
        <v-spacer></v-spacer>

        

        <v-toolbar-items>

            <v-container>
                <v-btn variant="tonal" color="#386F5B"> Log out
                </v-btn>
            </v-container>

            <v-container>
                <v-btn prepend-icon="$plus" variant="tonal" color="#386F5B">
                    Add specimen
                </v-btn>
            </v-container>

        </v-toolbar-items>

        <v-divider vertical></v-divider>
    </v-toolbar>
</template> -->

<style lang="scss" scoped></style>
