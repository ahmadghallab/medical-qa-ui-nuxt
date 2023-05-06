
interface Params {
  onCompleted?: (val?: any) => void;
}

export function useMutation({ onCompleted }: Params) {
  const config = useRuntimeConfig();
  let loading = ref(false);
  let error = ref('')

  async function mutate(url: string, options = {}) {
    loading.value = true
    try {
      const data = await useFetch(url, {baseURL: config.public.apiBase, ...options});

      if (onCompleted)
        onCompleted(data.data.value);

    } catch (err: any) {
      let msg: string;
      try {
        msg = err.response.data.message;
      } catch (e) {
        msg = 'Something went wrong';
      }
      error.value = msg
    } finally {
      loading.value = false
    }

  }

  return { loading, error, mutate } as const

}