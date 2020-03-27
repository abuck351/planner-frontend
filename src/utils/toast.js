export default function toast(title, message, variant) {
  // Must use toast.call(this, title, message, variant)
  this.$bvToast.toast(message, {
    title,
    variant,
    solid: true
  });
}
