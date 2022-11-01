<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
let isOpened = ref(false);
let changeOpened = function () {
    // alert(isOpened.value)
    isOpened.value = !isOpened.value
}
</script>
<template>
    <nav :class="{ opened: isOpened }">
        <span @click="changeOpened">
            <Icon icon="heroicons-solid:menu-alt-1" height="2em" />
        </span>
        <a href="!#"><span>Home</span>
            <Icon icon="bx:home" />
        </a>
        <a href="!#"><span>About Me</span>
            <Icon icon="mdi:card-account-details-outline" />
        </a>
        <a href="!#"><span>Contact me</span>
            <Icon icon="cil:contact" />
        </a>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    padding-top: .5rem;
    transform: translateY(75%);

    /* align-items: flex-start */
    border: 2px solid var(--primary-light);
    margin-inline: .5rem;
    background-color: var(--bg-light);
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
}

span {
    background-color: var(--bg-light);
    margin-left: 4px;
    width: 250px;
}

svg {
    vertical-align: middle;
}

a {
    /* margin-top: .5rem; */
    padding: .5rem 1rem;
    flex: 1;
    /* border-top-right-radius: 24px; */
    /* border-bottom-right-radius: 24px; */
    /* transform: translateX(-80%); */
    transition: transform .3s ease-in-out;
    display: flex;
    align-items: center;
    background-color: var(--bg-light);
    justify-content: space-between;
    text-decoration: none;
    font-weight: var(--font-bold);
}

a:last-child {
    margin-bottom: 20px;
}

.opened {
    transform: translateY(10%);
}
</style>