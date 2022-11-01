<script setup>
import { Icon } from '@iconify/vue';
let goto = function (target) {
    window.open(target, '_blank').focus();
}
</script>
<template>
    <main>
        <h1>Contact <span>Me</span></h1>
        <div class="box primary-box">
            <div class="box-title">Follow Me On <span>Me</span></div>
            <div class="box-content">
                <div class="f-row">
                    <Icon @click="goto('https://www.facebook.com/a.98.dutta/')" icon="akar-icons:facebook-fill"
                        width="64" height="64" />
                    <Icon @click="goto('https://twitter.com/AvinabaDutta8')" icon="akar-icons:twitter-fill" width="64"
                        height="64" />
                    <Icon @click="goto('https://www.instagram.com/a.dutta_/')" icon="akar-icons:instagram-fill"
                        width="64" height="64" />
                    <Icon @click="goto('https://join.skype.com/invite/vtOa6HFnvSYg')" icon="simple-icons:skype"
                        width="64" height="64" />
                    <Icon @click="goto('https://www.linkedin.com/in/avinaba-dutta-a88a5b213/')"
                        icon="brandico:linkedin-rect" width="64" height="64" />
                </div>
            </div>
        </div>
        <p>
            OR
        </p>
        <div class="box primary-box">
            <div class="box-title"><span>Call</span> Me On</div>
            <div class="box-content">
                <div class="f-row">
                    <a href="tel:+918016941498">
                        <Icon icon="eva:phone-call-fill" width="32" height="32" />
                        +91-8016941498
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    padding: 1rem;
}

.box {
    text-align: center;
    padding: 1.5rem;
    box-shadow: 0px 10px 8px rgba(0, 0, 0, .4);
    border: 2px solid black;
    border-radius: .5rem;
}

span {
    color: var(--primary-light);
}

.primary-box {
    border-color: var(--primary-light);
}

.box-content {
    text-align: justify;
}

.box-title {
    font-size: var(--font-size-large);
    font-weight: var(--font-light);
    margin-bottom: 1rem;
}

.f-row {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

svg {
    vertical-align: middle;
    color: var(--primary-light);
    cursor: pointer;
}

svg:nth-child(1) {
    color: #4267B2;
}

svg:nth-child(2) {
    color: #1DA1F2;
}

svg:nth-child(3) {
    color: #8a3ab9;
}

svg:nth-child(4) {
    color: #00aff0;
}

svg:nth-child(5) {
    color: #0077b5;
}

a {
    text-decoration: none;
    color: #4267B2;
}
</style>