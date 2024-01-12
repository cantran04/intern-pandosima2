<template>
    <div :class="cx('wrapper')">
        <div :class="cx('header')">
            <Header />
        </div>
        <div :class="cx('container')">
            <div :class="cx('sidebar')">
                <Sidebar />
            </div>
            <div :class="cx('content')">
                <h1> router view {{ $route.path }}</h1>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
const cx = classNames.bind(styles);
</script>
