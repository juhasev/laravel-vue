<template>
    <v-app>
        <div ref="application">
            <toolbar/>

            <navigation-drawer/>

            <v-main>
                <keep-alive>
                        <router-view></router-view>
                </keep-alive>
            </v-main>
        </div>
    </v-app>
</template>

<script>

import Toolbar from "../application/Toolbar";
import NavigationDrawer from "../application/NavigationDrawer";

export default {

    name: "App.vue",

    components: {
        NavigationDrawer,
        Toolbar
    }
}

</script>
