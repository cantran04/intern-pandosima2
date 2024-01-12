
<template>
    <div :class="cx('wrapper')">
        <h1 :class="cx('text')">Router Link</h1>
        <div :class="cx('container')">
            <router-link to="/" :class="cx('container_child', { active: $route.name === 'home' && true })">Home</router-link>
            <router-link to="/about" :class="cx('container_child',{ active: $route.name === 'about' && true })"> About</router-link>
            <router-link to="/users/tung" :class="cx('container_child',{ active: $route.name === 'user' && true })"> User with params</router-link>
        </div>
    </div>
</template>

<script setup>
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

</script>
