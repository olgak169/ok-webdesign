import { defineAsyncComponent } from 'vue'
import LoaderInfo from '../components/helpers/LoaderInfo.vue'

export function asyncInfo(name) {
  const infoComp = defineAsyncComponent({
    loader: () => import(`../components/${name}Comp.vue`),
    loadingComponent: LoaderInfo,
    delay: 200,
  })

  return infoComp
}
