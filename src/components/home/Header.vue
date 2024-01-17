<script setup>

</script>
<template>
    <v-app>
        <v-container class="DesignHeader">
            <v-app-bar density="prominent" scroll-behavior="hide fade-image" scroll-threshold="1000">

                <v-container class="ComponentsHeader">
                    <v-toolbar-items>
                        <v-container class="Title">
                            <div class="text-h5">Zootopía</div>
                        </v-container>

                        <v-container class="Button1">
                            <v-btn variant="elevated" color="#386F5B" density="default" size="x-large"> Log out

                            </v-btn>
                        </v-container>
                        <v-container class="Button2">
                            <v-btn variant="elevated" color="#386F5B" density="default" size="x-large">

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

<style lang="scss" scoped>
.DesignHeader {
    background-image: url(../../assets/images/TIN-319\ Zootopia_large.jpg);
    background-size: cover;
    background-position: center;
}

.Title {
    display: flex;


}

.Button1 {
    display: flex;
    justify-content: end;


}

.Button2 {
    display: flex;
    justify-content: end;

}
</style>
