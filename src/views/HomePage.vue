<template>
    <HeroSection />
    <SkillsSection />
    <ExperienceSection/>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
</script>