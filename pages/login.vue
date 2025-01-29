<script setup lang="ts">
const {t} = useI18n({
  useScope: 'local'
})
const loginWithDiscord = () => {
  // Redirect to Discord OAuth login
  window.location.href = "/auth/discord";
}
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center px-4">
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">{{ t('title') }}</CardTitle>
        <CardDescription>
          {{ t('description') }}.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button @click="loginWithDiscord" class="w-full">
          <Icon name="ic:round-discord" class="w-5 h-5" />
          {{ t('button') }}
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Sign in",
    "description": "Sign in into panel using Discord",
    "button": "Login using Discord"
  },
  "uk": {
    "title": "Авторизація",
    "description": "Авторизуйтесь в панелі з допомогою Discord",
    "button": "Війти через Discord"
  }
}
</i18n>