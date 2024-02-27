export function USE_ASSET(path: string): string | any {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/' + path]
}