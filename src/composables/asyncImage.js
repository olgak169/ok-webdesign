import { defineAsyncComponent } from 'vue'
import LoaderImg from '../components/helpers/LoaderImg.vue'

export function asyncImg(name) {
  const imgComp = defineAsyncComponent({
    loader: () => import(`../components/elements/${name}Image.vue`),
    loadingComponent: LoaderImg,
    delay: 800,
  })

  return imgComp
}
