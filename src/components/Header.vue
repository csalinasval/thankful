<template>
    <div class="row">
        <ul class="navbar-list">
            <li class="navbar-item"><a class="navbar-link" href="#intro">Inicio</a></li>
            <li class="navbar-item"><a class="navbar-link" href="#examples">Salir</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

        .navbar + {
            border-top-width: 0; }

        .navbar-list {
            list-style: none;
            margin-bottom: 0; }
        .navbar-item {
            position: relative;
            float: left;
            margin-bottom: 0; }
        .navbar-link {
            text-transform: uppercase;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: .2rem;
            margin-right: 35px;
            text-decoration: none;
            line-height: 6.5rem;
            color: #222; }


</style>