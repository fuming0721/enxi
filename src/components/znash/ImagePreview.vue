<script>
import { ImagePreview } from 'vant'
export default {
  methods: {
    imagePreview (index, images, basUrl) {
      window.history.pushState(null, null, document.URL)
      ImagePreview({
        images: images.map(item => basUrl ? basUrl + item : item),
        startPosition: index,
        closeOnPopstate: true,
        showIndex: true,
        className: 'image-preview',
        autoplay: false
      })
    }
  }
}
</script>
