<template>
    <main>
        <h1>
            <span>Hi! </span>
            <span>It's Avinaba</span>
        </h1>
        <p>
            swipe down
        </p>
        <p>⌄</p>
    </main>
</template>
<style scoped>
main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p {
    margin: 0;
}

h1 {
    font-size: var(--font-size-large) !important;
}

span:first-child {
    color: var(--primary-light);
}
</style>