import defaultsDeep from 'lodash/defaultsDeep'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const baseRequest = async <T>(
  path: string,
  params?: URLSearchParams | null,
  body?: object | string,
  options?: RequestInit
): Promise<T> => {
  const defaultOptions = {
    headers: headers,
    body: JSON.stringify(body),
  }

  const uri = process.env.REACT_APP_API_URI
  let api = `${uri}/${path}`

  if (params) {
    api = `${api}?${params}`
  }

  const opt = defaultsDeep(options, defaultOptions)
  const response = await fetch(api, opt)

  if (!response.ok) {
    return Promise.reject(response)
  } else {
    return await response.json()
  }
}
