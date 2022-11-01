<script setup>
import { Icon } from '@iconify/vue';
</script>
<template>
    <nav>
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
    top: 40%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start
}

svg {
    vertical-align: middle;
}

a {
    margin-top: .5rem;
    padding: .5rem 1rem;
    width: 250px;
    border: 2px solid var(--primary-light);
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    transform: translateX(-80%);
    transition: transform .3s ease-in-out;
    display: flex;
    align-items: center;
    background-color: var(--bg-light);
    justify-content: space-between;
    text-decoration: none;
    color: var(--primary-light);
    font-weight: var(--font-bold);
}

a:hover {
    transform: translateX(-0%);
}
</style>