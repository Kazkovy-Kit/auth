<script lang="ts" setup>
import {nextTick} from "vue";

const {t} = useI18n()
const {user, clear} = useUserSession();

const router = useRouter();

async function logout() {
  await router.push({name: 'login'});
  await nextTick(async () => {
    await clear();
  });
}
</script>

<template>
  <Alert v-if="!user" variant="destructive">
    <AlertDescription>
      {{ t('user_not_found') }}
    </AlertDescription>
  </Alert>

  <DropdownMenu v-else>
    <DropdownMenuTrigger as-child>
      <SidebarMenuButton
          size="lg"
          class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <Avatar class="h-8 w-8 rounded-lg">
          <AvatarImage
              :src="`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`"
              :alt="user.global_name"
          />
          <AvatarFallback class="rounded-lg">
            {{ user.username.charAt(0) + user.username.charAt(1) }}
          </AvatarFallback>
        </Avatar>
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">{{ user.global_name }}</span>
          <span class="truncate text-xs">{{ user.email }}</span>
        </div>
        <Icon name="lucide:chevrons-up-down" class="ml-auto size-4"/>
      </SidebarMenuButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent
        class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="bottom"
        align="end"
        :side-offset="4"
    >
      <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar class="h-8 w-8 rounded-lg">
            <AvatarImage
                :src="`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`"
                :alt="user.global_name"
            />
            <AvatarFallback class="rounded-lg">
              {{ user.username.charAt(0) + user.username.charAt(1) }}
            </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ user.global_name }}</span>
            <span class="truncate text-xs">{{ user.email }}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <slot/>
      <DropdownMenuSeparator/>
      <DropdownMenuItem class="hover:cursor-pointer" @click="logout">
        <Icon name="lucide:log-out"/>
        {{ t('logout') }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<i18n lang="json">
{
  "en": {
    "user_not_found": "There was an error fetching user, something went wrong, and user is null.",
    "logout": "Logout"
  },
  "uk": {
    "user_not_found": "Виникла помилка при отримані користувача, користувача не існує.",
    "logout": "Вийти"
  }
}
</i18n>