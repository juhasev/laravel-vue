<template>

    <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
        enable-resize-watcher
        width="220"
    >
        <v-list dense class="pt-0">
            <!-- MENU ITEMS -->
            <v-list-item dense v-for="item in items"
                         :key="item.id"
                         :class="isRouteActive(item.route) ? 'primary arrow_box': 'secondary menu_item'"
                         ripple
                         @click="itemClicked(item)">

                <v-list-item-action class="mr-4">
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>

                <div v-show="isRouteActive(item.route)" class="arrowBox">
                    <v-btn icon>
                        <v-icon large color="grey lighten-3">mdi-menu-right</v-icon>
                    </v-btn>
                </div>

            </v-list-item>

        </v-list>

    </v-navigation-drawer>

</template>

<script>

export default {

    data: () => ({
        drawer: true,
        activeRoute: '/',
        items: [
            {name: 'Home', route: '/', icon: 'mdi-view-dashboard'},
            {name: 'Star', route: '/about', icon: 'mdi-star'},
        ]

    }),
    methods: {

        isRouteActive(route) {
            return this.activeRoute === route;
        },

        itemClicked(item) {
            this.$router.push(item.route);
            this.activeRoute = item.route;
        },
    },
}
</script>

<style scoped>
.menu_item {
    height: 40px;
}

.arrowBox {
    position: absolute;
    right: 0px;
}

.arrow_box {
    position: relative;
    height: 40px;
}
</style>
