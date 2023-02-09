import React from 'https://esm.sh/react@18.2.0'
import satori, { init as initSatori } from 'https://esm.sh/satori@0.0.40/wasm'
import { initStreaming } from 'https://esm.sh/yoga-wasm-web@0.1.2'
import { initWasm, Resvg } from 'https://esm.sh/@resvg/resvg-wasm@2.0.0-alpha.4'

const GRADIENTS = [
  'linear-gradient(45deg, #eb5a00, #0065a3)',
  'linear-gradient(45deg, #0065a3, #eb5a00)',
]

const resvgWasm = fetch(
  'https://unpkg.com/@vercel/og@0.0.18/vendor/resvg.simd.wasm'
).then((res) => res.arrayBuffer())
const yogaWasm = fetch('https://unpkg.com/@vercel/og@0.0.18/vendor/yoga.wasm')
const fallBackFont = fetch(
  'https://unpkg.com/@vercel/og@0.18/vendor/noto-sans-v27-latin-regular.ttf'
).then((font) => font.arrayBuffer())

const initializedYoga = initStreaming(yogaWasm).then((yoga) => initSatori(yoga))
const initializedResvg = initWasm(resvgWasm)

const isDev = !!Deno.env.get('NETLIFY_LOCAL')

async function loadFonts(font, wght = 900) {
  if (!font) return
  const fontApi = `https://fonts.googleapis.com/css2?family=${font}:wght@${wght}&display=swap`

  const googleFont = await (
    await fetch(fontApi, {
      headers: {
        'User-agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    })
  ).text()

  const preferType = googleFont.match(
    /\S+\s?\S+\((\S+)\)\s?format\('(opentype|truetype|woff)'\)/
  )
  try {
    return fetch(preferType[1]).then((font) => font.arrayBuffer())
  } catch (err) {
    console.log(err.message)
  }

}

const acceptedFont = loadFonts('Inter', 900)

export default function handler(request) {
  try {
    const url = new URL(request.url)
    const title = url.searchParams.has('title')
      ? url.searchParams.get('title').slice(0, 100)
      : 'Hey Felas!';
    const hue = url.searchParams.has('hue') ? url.searchParams.get('hue') : 23;
    const background = url.searchParams.has('gradient')
      ? GRADIENTS[url.searchParams.get('gradient')]
      : `hsl(${hue} 80% 50%)`;

    const extendedOptions = Object.assign(
      {
        width: 1200,
        height: 600,
        debug: false,
        // embedFonts: false,
      },
      {}
    )

    const element = (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          position: 'relative',
          padding: '2rem',
          alignItems: 'center',
          background,
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 630"
            fill="none"
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              width: 1200,
              height: 630,
            }}
          >
            {/* Precut backdrop */}
            <path
              d="M1201 1H21.5215H1V631H405.452H823.258C823.258 631 788.917 443 895.754 329C1002.59 215 1201 255 1201 255V1Z"
              fill="#100F0F"
              stroke="#100F0F"
            />
            <path
              d="M1190.16 134.545C1190.16 135.102 1190.07 135.598 1189.88 136.034C1189.68 136.47 1189.39 136.814 1189.01 137.068C1188.62 137.318 1188.14 137.443 1187.56 137.443C1187.08 137.443 1186.67 137.354 1186.34 137.176C1186.01 136.998 1185.75 136.756 1185.55 136.449C1185.34 136.142 1185.19 135.794 1185.09 135.403C1184.99 135.009 1184.92 134.597 1184.88 134.165C1184.82 133.657 1184.77 133.248 1184.73 132.938C1184.68 132.627 1184.61 132.402 1184.51 132.261C1184.42 132.121 1184.28 132.051 1184.09 132.051H1184.06C1183.7 132.051 1183.42 132.165 1183.22 132.392C1183.02 132.616 1182.93 132.934 1182.93 133.347C1182.93 133.782 1183.02 134.129 1183.22 134.386C1183.41 134.644 1183.64 134.814 1183.93 134.898L1183.75 137.136C1183.22 137.023 1182.76 136.799 1182.38 136.466C1181.98 136.133 1181.69 135.703 1181.48 135.176C1181.27 134.646 1181.16 134.032 1181.16 133.335C1181.16 132.85 1181.22 132.386 1181.33 131.943C1181.44 131.496 1181.62 131.1 1181.86 130.756C1182.1 130.407 1182.4 130.133 1182.78 129.932C1183.15 129.731 1183.59 129.631 1184.11 129.631H1190V131.926H1188.79V131.994C1189.06 132.134 1189.3 132.322 1189.51 132.557C1189.72 132.792 1189.88 133.074 1189.99 133.403C1190.11 133.733 1190.16 134.114 1190.16 134.545ZM1188.49 133.852C1188.49 133.496 1188.42 133.182 1188.28 132.909C1188.14 132.636 1187.95 132.422 1187.7 132.267C1187.46 132.112 1187.19 132.034 1186.88 132.034H1185.95C1186 132.11 1186.05 132.214 1186.09 132.347C1186.13 132.475 1186.16 132.621 1186.2 132.784C1186.23 132.947 1186.26 133.11 1186.28 133.273C1186.31 133.436 1186.33 133.583 1186.35 133.716C1186.39 134 1186.45 134.248 1186.55 134.46C1186.64 134.672 1186.76 134.837 1186.91 134.955C1187.07 135.072 1187.26 135.131 1187.48 135.131C1187.81 135.131 1188.06 135.011 1188.24 134.773C1188.41 134.53 1188.49 134.223 1188.49 133.852ZM1190.16 125.264C1190.16 125.821 1190.07 126.317 1189.88 126.753C1189.68 127.188 1189.39 127.533 1189.01 127.787C1188.62 128.037 1188.14 128.162 1187.56 128.162C1187.08 128.162 1186.67 128.073 1186.34 127.895C1186.01 127.717 1185.75 127.474 1185.55 127.168C1185.34 126.861 1185.19 126.512 1185.09 126.122C1184.99 125.728 1184.92 125.315 1184.88 124.884C1184.82 124.376 1184.77 123.967 1184.73 123.656C1184.68 123.346 1184.61 123.12 1184.51 122.98C1184.42 122.84 1184.28 122.77 1184.09 122.77H1184.06C1183.7 122.77 1183.42 122.884 1183.22 123.111C1183.02 123.334 1182.93 123.652 1182.93 124.065C1182.93 124.501 1183.02 124.848 1183.22 125.105C1183.41 125.363 1183.64 125.533 1183.93 125.616L1183.75 127.855C1183.22 127.741 1182.76 127.518 1182.38 127.185C1181.98 126.851 1181.69 126.421 1181.48 125.895C1181.27 125.365 1181.16 124.751 1181.16 124.054C1181.16 123.569 1181.22 123.105 1181.33 122.662C1181.44 122.215 1181.62 121.819 1181.86 121.474C1182.1 121.126 1182.4 120.851 1182.78 120.651C1183.15 120.45 1183.59 120.349 1184.11 120.349H1190V122.645H1188.79V122.713C1189.06 122.853 1189.3 123.041 1189.51 123.276C1189.72 123.51 1189.88 123.793 1189.99 124.122C1190.11 124.452 1190.16 124.832 1190.16 125.264ZM1188.49 124.571C1188.49 124.215 1188.42 123.901 1188.28 123.628C1188.14 123.355 1187.95 123.141 1187.7 122.986C1187.46 122.83 1187.19 122.753 1186.88 122.753H1185.95C1186 122.829 1186.05 122.933 1186.09 123.065C1186.13 123.194 1186.16 123.34 1186.2 123.503C1186.23 123.666 1186.26 123.829 1186.28 123.991C1186.31 124.154 1186.33 124.302 1186.35 124.435C1186.39 124.719 1186.45 124.967 1186.55 125.179C1186.64 125.391 1186.76 125.556 1186.91 125.673C1187.07 125.791 1187.26 125.849 1187.48 125.849C1187.81 125.849 1188.06 125.73 1188.24 125.491C1188.41 125.249 1188.49 124.942 1188.49 124.571ZM1190.14 115.256C1190.14 115.919 1189.97 116.519 1189.63 117.057C1189.29 117.591 1188.78 118.015 1188.11 118.33C1187.44 118.64 1186.62 118.795 1185.65 118.795C1184.65 118.795 1183.82 118.634 1183.15 118.312C1182.49 117.991 1181.99 117.562 1181.66 117.028C1181.33 116.491 1181.16 115.902 1181.16 115.261C1181.16 114.773 1181.24 114.366 1181.41 114.04C1181.57 113.71 1181.78 113.445 1182.02 113.244C1182.27 113.04 1182.5 112.884 1182.74 112.778V112.705H1178.36V110.29H1190V112.676H1188.6V112.778C1188.84 112.892 1189.09 113.053 1189.32 113.261C1189.56 113.466 1189.75 113.733 1189.91 114.062C1190.06 114.388 1190.14 114.786 1190.14 115.256ZM1188.22 114.489C1188.22 114.098 1188.11 113.769 1187.9 113.5C1187.68 113.227 1187.38 113.019 1186.99 112.875C1186.61 112.727 1186.16 112.653 1185.64 112.653C1185.12 112.653 1184.67 112.725 1184.28 112.869C1183.9 113.013 1183.61 113.222 1183.4 113.494C1183.19 113.767 1183.09 114.098 1183.09 114.489C1183.09 114.886 1183.19 115.222 1183.41 115.494C1183.62 115.767 1183.92 115.973 1184.31 116.114C1184.69 116.254 1185.13 116.324 1185.64 116.324C1186.14 116.324 1186.59 116.254 1186.98 116.114C1187.37 115.97 1187.67 115.763 1187.89 115.494C1188.11 115.222 1188.22 114.886 1188.22 114.489ZM1190.17 104.322C1190.17 105.22 1189.99 105.993 1189.62 106.641C1189.26 107.285 1188.74 107.781 1188.07 108.129C1187.39 108.478 1186.6 108.652 1185.68 108.652C1184.78 108.652 1183.99 108.478 1183.31 108.129C1182.63 107.781 1182.11 107.29 1181.73 106.658C1181.35 106.021 1181.16 105.275 1181.16 104.419C1181.16 103.843 1181.25 103.307 1181.44 102.811C1181.62 102.311 1181.89 101.875 1182.26 101.504C1182.63 101.129 1183.09 100.838 1183.65 100.629C1184.2 100.421 1184.85 100.317 1185.59 100.317H1186.26V107.686H1184.76V102.595C1184.41 102.595 1184.1 102.671 1183.83 102.822C1183.56 102.974 1183.35 103.184 1183.2 103.453C1183.04 103.718 1182.97 104.027 1182.97 104.379C1182.97 104.747 1183.05 105.072 1183.22 105.357C1183.39 105.637 1183.61 105.857 1183.9 106.016C1184.18 106.175 1184.49 106.256 1184.84 106.26H1186.26C1186.69 106.26 1187.07 106.18 1187.38 106.021C1187.7 105.858 1187.94 105.629 1188.11 105.334C1188.28 105.038 1188.36 104.688 1188.36 104.283C1188.36 104.014 1188.33 103.768 1188.25 103.544C1188.17 103.321 1188.06 103.129 1187.91 102.97C1187.76 102.811 1187.57 102.69 1187.35 102.607L1187.5 100.368C1188.04 100.482 1188.51 100.714 1188.91 101.067C1189.31 101.415 1189.62 101.866 1189.84 102.419C1190.06 102.968 1190.17 103.603 1190.17 104.322ZM1183.76 91.4759L1183.9 93.6918C1183.71 93.7296 1183.54 93.8111 1183.39 93.9361C1183.23 94.0611 1183.11 94.2259 1183.02 94.4304C1182.92 94.6312 1182.88 94.8717 1182.88 95.152C1182.88 95.527 1182.95 95.8433 1183.11 96.1009C1183.27 96.3584 1183.48 96.4872 1183.74 96.4872C1183.95 96.4872 1184.12 96.4039 1184.27 96.2372C1184.41 96.0705 1184.53 95.7846 1184.61 95.3793L1184.93 93.7997C1185.11 92.9512 1185.39 92.3187 1185.77 91.902C1186.16 91.4853 1186.67 91.277 1187.3 91.277C1187.87 91.277 1188.37 91.4455 1188.8 91.7827C1189.23 92.116 1189.57 92.5743 1189.81 93.1577C1190.05 93.7372 1190.17 94.4058 1190.17 95.1634C1190.17 96.3187 1189.93 97.2391 1189.45 97.9247C1188.96 98.6065 1188.3 99.0062 1187.47 99.1236L1187.35 96.7429C1187.7 96.6709 1187.97 96.4967 1188.15 96.2202C1188.34 95.9437 1188.43 95.5895 1188.43 95.1577C1188.43 94.7334 1188.34 94.3925 1188.18 94.1349C1188.02 93.8736 1187.8 93.741 1187.54 93.7372C1187.32 93.741 1187.14 93.8338 1187 94.0156C1186.86 94.1974 1186.75 94.4777 1186.67 94.8565L1186.37 96.3679C1186.2 97.2202 1185.9 97.8546 1185.48 98.2713C1185.06 98.6842 1184.53 98.8906 1183.88 98.8906C1183.31 98.8906 1182.83 98.7391 1182.43 98.4361C1182.02 98.1293 1181.71 97.6993 1181.49 97.1463C1181.27 96.5895 1181.16 95.938 1181.16 95.1918C1181.16 94.0895 1181.39 93.2221 1181.86 92.5895C1182.32 91.9531 1182.96 91.5819 1183.76 91.4759ZM1190 89.7528H1181.27V87.3324H1190V89.7528ZM1180.15 88.5369C1180.15 88.8968 1180.03 89.2055 1179.79 89.4631C1179.55 89.7169 1179.26 89.8438 1178.92 89.8438C1178.59 89.8438 1178.3 89.7169 1178.06 89.4631C1177.82 89.2055 1177.7 88.8968 1177.7 88.5369C1177.7 88.1771 1177.82 87.8703 1178.06 87.6165C1178.3 87.3589 1178.59 87.2301 1178.92 87.2301C1179.26 87.2301 1179.55 87.3589 1179.79 87.6165C1180.03 87.8703 1180.15 88.1771 1180.15 88.5369ZM1184.95 82.973H1190V85.3935H1181.27V83.0866H1182.81V82.9844C1182.3 82.7912 1181.9 82.4673 1181.61 82.0128C1181.31 81.5582 1181.16 81.0071 1181.16 80.3594C1181.16 79.7533 1181.29 79.2249 1181.56 78.7741C1181.82 78.3234 1182.2 77.973 1182.69 77.723C1183.18 77.473 1183.77 77.348 1184.44 77.348H1190V79.7685H1184.88C1184.34 79.7647 1183.92 79.901 1183.62 80.1776C1183.32 80.4541 1183.17 80.8348 1183.17 81.3196C1183.17 81.6454 1183.24 81.9332 1183.38 82.1832C1183.52 82.4295 1183.73 82.6226 1183.99 82.7628C1184.26 82.8991 1184.58 82.9692 1184.95 82.973ZM1190.16 72.9517C1190.16 73.5085 1190.07 74.0047 1189.88 74.4403C1189.68 74.8759 1189.39 75.2206 1189.01 75.4744C1188.62 75.7244 1188.14 75.8494 1187.56 75.8494C1187.08 75.8494 1186.67 75.7604 1186.34 75.5824C1186.01 75.4044 1185.75 75.1619 1185.55 74.8551C1185.34 74.5483 1185.19 74.1998 1185.09 73.8097C1184.99 73.4157 1184.92 73.0028 1184.88 72.571C1184.82 72.0634 1184.77 71.6544 1184.73 71.3438C1184.68 71.0331 1184.61 70.8078 1184.51 70.6676C1184.42 70.5275 1184.28 70.4574 1184.09 70.4574H1184.06C1183.7 70.4574 1183.42 70.571 1183.22 70.7983C1183.02 71.0218 1182.93 71.34 1182.93 71.7528C1182.93 72.1884 1183.02 72.535 1183.22 72.7926C1183.41 73.0502 1183.64 73.2206 1183.93 73.304L1183.75 75.5426C1183.22 75.429 1182.76 75.2055 1182.38 74.8722C1181.98 74.5388 1181.69 74.1089 1181.48 73.5824C1181.27 73.0521 1181.16 72.4384 1181.16 71.7415C1181.16 71.2566 1181.22 70.7926 1181.33 70.3494C1181.44 69.9025 1181.62 69.5066 1181.86 69.1619C1182.1 68.8134 1182.4 68.5388 1182.78 68.3381C1183.15 68.1373 1183.59 68.0369 1184.11 68.0369H1190V70.3324H1188.79V70.4006C1189.06 70.5407 1189.3 70.7282 1189.51 70.9631C1189.72 71.1979 1189.88 71.4801 1189.99 71.8097C1190.11 72.1392 1190.16 72.5199 1190.16 72.9517ZM1188.49 72.2585C1188.49 71.9025 1188.42 71.5881 1188.28 71.3153C1188.14 71.0426 1187.95 70.8286 1187.7 70.6733C1187.46 70.518 1187.19 70.4403 1186.88 70.4403H1185.95C1186 70.5161 1186.05 70.6203 1186.09 70.7528C1186.13 70.8816 1186.16 71.0275 1186.2 71.1903C1186.23 71.3532 1186.26 71.5161 1186.28 71.679C1186.31 71.8419 1186.33 71.9896 1186.35 72.1222C1186.39 72.4062 1186.45 72.6544 1186.55 72.8665C1186.64 73.0786 1186.76 73.2434 1186.91 73.3608C1187.07 73.4782 1187.26 73.5369 1187.48 73.5369C1187.81 73.5369 1188.06 73.4176 1188.24 73.179C1188.41 72.9366 1188.49 72.6297 1188.49 72.2585ZM1190.15 64.7443C1190.15 65.1193 1190.02 65.4413 1189.75 65.7102C1189.48 65.9754 1189.16 66.108 1188.78 66.108C1188.41 66.108 1188.09 65.9754 1187.83 65.7102C1187.56 65.4413 1187.43 65.1193 1187.43 64.7443C1187.43 64.3807 1187.56 64.0625 1187.83 63.7898C1188.09 63.517 1188.41 63.3807 1188.78 63.3807C1189.03 63.3807 1189.26 63.4451 1189.47 63.5739C1189.68 63.6989 1189.84 63.8636 1189.97 64.0682C1190.09 64.2727 1190.15 64.4981 1190.15 64.7443ZM1190.17 57.4503C1190.17 58.3442 1189.98 59.1132 1189.6 59.7571C1189.22 60.3973 1188.69 60.8897 1188.01 61.2344C1187.33 61.5753 1186.55 61.7457 1185.67 61.7457C1184.78 61.7457 1183.99 61.5734 1183.32 61.2287C1182.64 60.8802 1182.11 60.3859 1181.73 59.7457C1181.35 59.1056 1181.16 58.3442 1181.16 57.4616C1181.16 56.7003 1181.3 56.0336 1181.57 55.4616C1181.85 54.8897 1182.24 54.437 1182.74 54.1037C1183.24 53.7704 1183.83 53.5866 1184.5 53.5526V55.8366C1184.06 55.901 1183.71 56.0715 1183.45 56.348C1183.18 56.6207 1183.05 56.9787 1183.05 57.4219C1183.05 57.7969 1183.15 58.1245 1183.35 58.4048C1183.55 58.6813 1183.85 58.8973 1184.23 59.0526C1184.62 59.2079 1185.09 59.2855 1185.64 59.2855C1186.19 59.2855 1186.67 59.2098 1187.06 59.0582C1187.45 58.9029 1187.74 58.6851 1187.95 58.4048C1188.15 58.1245 1188.26 57.7969 1188.26 57.4219C1188.26 57.1454 1188.2 56.8973 1188.09 56.6776C1187.97 56.4541 1187.81 56.2704 1187.59 56.1264C1187.37 55.9787 1187.11 55.8821 1186.8 55.8366V53.5526C1187.47 53.5904 1188.05 53.7723 1188.56 54.098C1189.07 54.42 1189.46 54.8651 1189.74 55.4332C1190.03 56.0014 1190.17 56.6738 1190.17 57.4503ZM1190.17 48.0597C1190.17 48.9422 1189.98 49.7055 1189.61 50.3494C1189.23 50.9896 1188.7 51.4839 1188.03 51.8324C1187.35 52.1809 1186.56 52.3551 1185.67 52.3551C1184.77 52.3551 1183.98 52.1809 1183.31 51.8324C1182.63 51.4839 1182.1 50.9896 1181.73 50.3494C1181.35 49.7055 1181.16 48.9422 1181.16 48.0597C1181.16 47.1771 1181.35 46.4157 1181.73 45.7756C1182.1 45.1316 1182.63 44.6354 1183.31 44.2869C1183.98 43.9384 1184.77 43.7642 1185.67 43.7642C1186.56 43.7642 1187.35 43.9384 1188.03 44.2869C1188.7 44.6354 1189.23 45.1316 1189.61 45.7756C1189.98 46.4157 1190.17 47.1771 1190.17 48.0597ZM1188.3 48.0483C1188.3 47.6468 1188.18 47.3116 1187.95 47.0426C1187.72 46.7737 1187.41 46.571 1187.01 46.4347C1186.61 46.2945 1186.16 46.2244 1185.65 46.2244C1185.15 46.2244 1184.69 46.2945 1184.3 46.4347C1183.9 46.571 1183.58 46.7737 1183.35 47.0426C1183.12 47.3116 1183.01 47.6468 1183.01 48.0483C1183.01 48.4536 1183.12 48.7945 1183.35 49.071C1183.58 49.3437 1183.9 49.5502 1184.3 49.6903C1184.69 49.8267 1185.15 49.8949 1185.65 49.8949C1186.16 49.8949 1186.61 49.8267 1187.01 49.6903C1187.41 49.5502 1187.72 49.3437 1187.95 49.071C1188.18 48.7945 1188.3 48.4536 1188.3 48.0483ZM1190 42.1903H1181.27V39.8835H1182.81V39.7812C1182.3 39.5994 1181.9 39.2964 1181.6 38.8722C1181.31 38.4479 1181.16 37.9403 1181.16 37.3494C1181.16 36.7509 1181.31 36.2415 1181.61 35.821C1181.9 35.4006 1182.3 35.1203 1182.81 34.9801V34.8892C1182.31 34.7112 1181.91 34.3892 1181.61 33.9233C1181.31 33.4536 1181.16 32.8987 1181.16 32.2585C1181.16 31.4441 1181.42 30.7831 1181.94 30.2756C1182.45 29.7642 1183.18 29.5085 1184.13 29.5085H1190V31.9233H1184.61C1184.12 31.9233 1183.76 32.0521 1183.52 32.3097C1183.27 32.5672 1183.15 32.8892 1183.15 33.2756C1183.15 33.715 1183.29 34.0578 1183.57 34.304C1183.85 34.5502 1184.22 34.6733 1184.67 34.6733H1190V37.0199H1184.56C1184.13 37.0199 1183.79 37.143 1183.53 37.3892C1183.28 37.6316 1183.15 37.9517 1183.15 38.3494C1183.15 38.6184 1183.22 38.8608 1183.36 39.0767C1183.49 39.2888 1183.68 39.4574 1183.92 39.5824C1184.16 39.7074 1184.44 39.7699 1184.76 39.7699H1190V42.1903Z"
              fill="#100F0F"
            />
            <path
              d="M1190.16 134.545C1190.16 135.102 1190.07 135.598 1189.88 136.034C1189.68 136.47 1189.39 136.814 1189.01 137.068C1188.62 137.318 1188.14 137.443 1187.56 137.443C1187.08 137.443 1186.67 137.354 1186.34 137.176C1186.01 136.998 1185.75 136.756 1185.55 136.449C1185.34 136.142 1185.19 135.794 1185.09 135.403C1184.99 135.009 1184.92 134.597 1184.88 134.165C1184.82 133.657 1184.77 133.248 1184.73 132.938C1184.68 132.627 1184.61 132.402 1184.51 132.261C1184.42 132.121 1184.28 132.051 1184.09 132.051H1184.06C1183.7 132.051 1183.42 132.165 1183.22 132.392C1183.02 132.616 1182.93 132.934 1182.93 133.347C1182.93 133.782 1183.02 134.129 1183.22 134.386C1183.41 134.644 1183.64 134.814 1183.93 134.898L1183.75 137.136C1183.22 137.023 1182.76 136.799 1182.38 136.466C1181.98 136.133 1181.69 135.703 1181.48 135.176C1181.27 134.646 1181.16 134.032 1181.16 133.335C1181.16 132.85 1181.22 132.386 1181.33 131.943C1181.44 131.496 1181.62 131.1 1181.86 130.756C1182.1 130.407 1182.4 130.133 1182.78 129.932C1183.15 129.731 1183.59 129.631 1184.11 129.631H1190V131.926H1188.79V131.994C1189.06 132.134 1189.3 132.322 1189.51 132.557C1189.72 132.792 1189.88 133.074 1189.99 133.403C1190.11 133.733 1190.16 134.114 1190.16 134.545ZM1188.49 133.852C1188.49 133.496 1188.42 133.182 1188.28 132.909C1188.14 132.636 1187.95 132.422 1187.7 132.267C1187.46 132.112 1187.19 132.034 1186.88 132.034H1185.95C1186 132.11 1186.05 132.214 1186.09 132.347C1186.13 132.475 1186.16 132.621 1186.2 132.784C1186.23 132.947 1186.26 133.11 1186.28 133.273C1186.31 133.436 1186.33 133.583 1186.35 133.716C1186.39 134 1186.45 134.248 1186.55 134.46C1186.64 134.672 1186.76 134.837 1186.91 134.955C1187.07 135.072 1187.26 135.131 1187.48 135.131C1187.81 135.131 1188.06 135.011 1188.24 134.773C1188.41 134.53 1188.49 134.223 1188.49 133.852ZM1190.16 125.264C1190.16 125.821 1190.07 126.317 1189.88 126.753C1189.68 127.188 1189.39 127.533 1189.01 127.787C1188.62 128.037 1188.14 128.162 1187.56 128.162C1187.08 128.162 1186.67 128.073 1186.34 127.895C1186.01 127.717 1185.75 127.474 1185.55 127.168C1185.34 126.861 1185.19 126.512 1185.09 126.122C1184.99 125.728 1184.92 125.315 1184.88 124.884C1184.82 124.376 1184.77 123.967 1184.73 123.656C1184.68 123.346 1184.61 123.12 1184.51 122.98C1184.42 122.84 1184.28 122.77 1184.09 122.77H1184.06C1183.7 122.77 1183.42 122.884 1183.22 123.111C1183.02 123.334 1182.93 123.652 1182.93 124.065C1182.93 124.501 1183.02 124.848 1183.22 125.105C1183.41 125.363 1183.64 125.533 1183.93 125.616L1183.75 127.855C1183.22 127.741 1182.76 127.518 1182.38 127.185C1181.98 126.851 1181.69 126.421 1181.48 125.895C1181.27 125.365 1181.16 124.751 1181.16 124.054C1181.16 123.569 1181.22 123.105 1181.33 122.662C1181.44 122.215 1181.62 121.819 1181.86 121.474C1182.1 121.126 1182.4 120.851 1182.78 120.651C1183.15 120.45 1183.59 120.349 1184.11 120.349H1190V122.645H1188.79V122.713C1189.06 122.853 1189.3 123.041 1189.51 123.276C1189.72 123.51 1189.88 123.793 1189.99 124.122C1190.11 124.452 1190.16 124.832 1190.16 125.264ZM1188.49 124.571C1188.49 124.215 1188.42 123.901 1188.28 123.628C1188.14 123.355 1187.95 123.141 1187.7 122.986C1187.46 122.83 1187.19 122.753 1186.88 122.753H1185.95C1186 122.829 1186.05 122.933 1186.09 123.065C1186.13 123.194 1186.16 123.34 1186.2 123.503C1186.23 123.666 1186.26 123.829 1186.28 123.991C1186.31 124.154 1186.33 124.302 1186.35 124.435C1186.39 124.719 1186.45 124.967 1186.55 125.179C1186.64 125.391 1186.76 125.556 1186.91 125.673C1187.07 125.791 1187.26 125.849 1187.48 125.849C1187.81 125.849 1188.06 125.73 1188.24 125.491C1188.41 125.249 1188.49 124.942 1188.49 124.571ZM1190.14 115.256C1190.14 115.919 1189.97 116.519 1189.63 117.057C1189.29 117.591 1188.78 118.015 1188.11 118.33C1187.44 118.64 1186.62 118.795 1185.65 118.795C1184.65 118.795 1183.82 118.634 1183.15 118.312C1182.49 117.991 1181.99 117.562 1181.66 117.028C1181.33 116.491 1181.16 115.902 1181.16 115.261C1181.16 114.773 1181.24 114.366 1181.41 114.04C1181.57 113.71 1181.78 113.445 1182.02 113.244C1182.27 113.04 1182.5 112.884 1182.74 112.778V112.705H1178.36V110.29H1190V112.676H1188.6V112.778C1188.84 112.892 1189.09 113.053 1189.32 113.261C1189.56 113.466 1189.75 113.733 1189.91 114.062C1190.06 114.388 1190.14 114.786 1190.14 115.256ZM1188.22 114.489C1188.22 114.098 1188.11 113.769 1187.9 113.5C1187.68 113.227 1187.38 113.019 1186.99 112.875C1186.61 112.727 1186.16 112.653 1185.64 112.653C1185.12 112.653 1184.67 112.725 1184.28 112.869C1183.9 113.013 1183.61 113.222 1183.4 113.494C1183.19 113.767 1183.09 114.098 1183.09 114.489C1183.09 114.886 1183.19 115.222 1183.41 115.494C1183.62 115.767 1183.92 115.973 1184.31 116.114C1184.69 116.254 1185.13 116.324 1185.64 116.324C1186.14 116.324 1186.59 116.254 1186.98 116.114C1187.37 115.97 1187.67 115.763 1187.89 115.494C1188.11 115.222 1188.22 114.886 1188.22 114.489ZM1190.17 104.322C1190.17 105.22 1189.99 105.993 1189.62 106.641C1189.26 107.285 1188.74 107.781 1188.07 108.129C1187.39 108.478 1186.6 108.652 1185.68 108.652C1184.78 108.652 1183.99 108.478 1183.31 108.129C1182.63 107.781 1182.11 107.29 1181.73 106.658C1181.35 106.021 1181.16 105.275 1181.16 104.419C1181.16 103.843 1181.25 103.307 1181.44 102.811C1181.62 102.311 1181.89 101.875 1182.26 101.504C1182.63 101.129 1183.09 100.838 1183.65 100.629C1184.2 100.421 1184.85 100.317 1185.59 100.317H1186.26V107.686H1184.76V102.595C1184.41 102.595 1184.1 102.671 1183.83 102.822C1183.56 102.974 1183.35 103.184 1183.2 103.453C1183.04 103.718 1182.97 104.027 1182.97 104.379C1182.97 104.747 1183.05 105.072 1183.22 105.357C1183.39 105.637 1183.61 105.857 1183.9 106.016C1184.18 106.175 1184.49 106.256 1184.84 106.26H1186.26C1186.69 106.26 1187.07 106.18 1187.38 106.021C1187.7 105.858 1187.94 105.629 1188.11 105.334C1188.28 105.038 1188.36 104.688 1188.36 104.283C1188.36 104.014 1188.33 103.768 1188.25 103.544C1188.17 103.321 1188.06 103.129 1187.91 102.97C1187.76 102.811 1187.57 102.69 1187.35 102.607L1187.5 100.368C1188.04 100.482 1188.51 100.714 1188.91 101.067C1189.31 101.415 1189.62 101.866 1189.84 102.419C1190.06 102.968 1190.17 103.603 1190.17 104.322ZM1183.76 91.4759L1183.9 93.6918C1183.71 93.7296 1183.54 93.8111 1183.39 93.9361C1183.23 94.0611 1183.11 94.2259 1183.02 94.4304C1182.92 94.6312 1182.88 94.8717 1182.88 95.152C1182.88 95.527 1182.95 95.8433 1183.11 96.1009C1183.27 96.3584 1183.48 96.4872 1183.74 96.4872C1183.95 96.4872 1184.12 96.4039 1184.27 96.2372C1184.41 96.0705 1184.53 95.7846 1184.61 95.3793L1184.93 93.7997C1185.11 92.9512 1185.39 92.3187 1185.77 91.902C1186.16 91.4853 1186.67 91.277 1187.3 91.277C1187.87 91.277 1188.37 91.4455 1188.8 91.7827C1189.23 92.116 1189.57 92.5743 1189.81 93.1577C1190.05 93.7372 1190.17 94.4058 1190.17 95.1634C1190.17 96.3187 1189.93 97.2391 1189.45 97.9247C1188.96 98.6065 1188.3 99.0062 1187.47 99.1236L1187.35 96.7429C1187.7 96.6709 1187.97 96.4967 1188.15 96.2202C1188.34 95.9437 1188.43 95.5895 1188.43 95.1577C1188.43 94.7334 1188.34 94.3925 1188.18 94.1349C1188.02 93.8736 1187.8 93.741 1187.54 93.7372C1187.32 93.741 1187.14 93.8338 1187 94.0156C1186.86 94.1974 1186.75 94.4777 1186.67 94.8565L1186.37 96.3679C1186.2 97.2202 1185.9 97.8546 1185.48 98.2713C1185.06 98.6842 1184.53 98.8906 1183.88 98.8906C1183.31 98.8906 1182.83 98.7391 1182.43 98.4361C1182.02 98.1293 1181.71 97.6993 1181.49 97.1463C1181.27 96.5895 1181.16 95.938 1181.16 95.1918C1181.16 94.0895 1181.39 93.2221 1181.86 92.5895C1182.32 91.9531 1182.96 91.5819 1183.76 91.4759ZM1190 89.7528H1181.27V87.3324H1190V89.7528ZM1180.15 88.5369C1180.15 88.8968 1180.03 89.2055 1179.79 89.4631C1179.55 89.7169 1179.26 89.8438 1178.92 89.8438C1178.59 89.8438 1178.3 89.7169 1178.06 89.4631C1177.82 89.2055 1177.7 88.8968 1177.7 88.5369C1177.7 88.1771 1177.82 87.8703 1178.06 87.6165C1178.3 87.3589 1178.59 87.2301 1178.92 87.2301C1179.26 87.2301 1179.55 87.3589 1179.79 87.6165C1180.03 87.8703 1180.15 88.1771 1180.15 88.5369ZM1184.95 82.973H1190V85.3935H1181.27V83.0866H1182.81V82.9844C1182.3 82.7912 1181.9 82.4673 1181.61 82.0128C1181.31 81.5582 1181.16 81.0071 1181.16 80.3594C1181.16 79.7533 1181.29 79.2249 1181.56 78.7741C1181.82 78.3234 1182.2 77.973 1182.69 77.723C1183.18 77.473 1183.77 77.348 1184.44 77.348H1190V79.7685H1184.88C1184.34 79.7647 1183.92 79.901 1183.62 80.1776C1183.32 80.4541 1183.17 80.8348 1183.17 81.3196C1183.17 81.6454 1183.24 81.9332 1183.38 82.1832C1183.52 82.4295 1183.73 82.6226 1183.99 82.7628C1184.26 82.8991 1184.58 82.9692 1184.95 82.973ZM1190.16 72.9517C1190.16 73.5085 1190.07 74.0047 1189.88 74.4403C1189.68 74.8759 1189.39 75.2206 1189.01 75.4744C1188.62 75.7244 1188.14 75.8494 1187.56 75.8494C1187.08 75.8494 1186.67 75.7604 1186.34 75.5824C1186.01 75.4044 1185.75 75.1619 1185.55 74.8551C1185.34 74.5483 1185.19 74.1998 1185.09 73.8097C1184.99 73.4157 1184.92 73.0028 1184.88 72.571C1184.82 72.0634 1184.77 71.6544 1184.73 71.3438C1184.68 71.0331 1184.61 70.8078 1184.51 70.6676C1184.42 70.5275 1184.28 70.4574 1184.09 70.4574H1184.06C1183.7 70.4574 1183.42 70.571 1183.22 70.7983C1183.02 71.0218 1182.93 71.34 1182.93 71.7528C1182.93 72.1884 1183.02 72.535 1183.22 72.7926C1183.41 73.0502 1183.64 73.2206 1183.93 73.304L1183.75 75.5426C1183.22 75.429 1182.76 75.2055 1182.38 74.8722C1181.98 74.5388 1181.69 74.1089 1181.48 73.5824C1181.27 73.0521 1181.16 72.4384 1181.16 71.7415C1181.16 71.2566 1181.22 70.7926 1181.33 70.3494C1181.44 69.9025 1181.62 69.5066 1181.86 69.1619C1182.1 68.8134 1182.4 68.5388 1182.78 68.3381C1183.15 68.1373 1183.59 68.0369 1184.11 68.0369H1190V70.3324H1188.79V70.4006C1189.06 70.5407 1189.3 70.7282 1189.51 70.9631C1189.72 71.1979 1189.88 71.4801 1189.99 71.8097C1190.11 72.1392 1190.16 72.5199 1190.16 72.9517ZM1188.49 72.2585C1188.49 71.9025 1188.42 71.5881 1188.28 71.3153C1188.14 71.0426 1187.95 70.8286 1187.7 70.6733C1187.46 70.518 1187.19 70.4403 1186.88 70.4403H1185.95C1186 70.5161 1186.05 70.6203 1186.09 70.7528C1186.13 70.8816 1186.16 71.0275 1186.2 71.1903C1186.23 71.3532 1186.26 71.5161 1186.28 71.679C1186.31 71.8419 1186.33 71.9896 1186.35 72.1222C1186.39 72.4062 1186.45 72.6544 1186.55 72.8665C1186.64 73.0786 1186.76 73.2434 1186.91 73.3608C1187.07 73.4782 1187.26 73.5369 1187.48 73.5369C1187.81 73.5369 1188.06 73.4176 1188.24 73.179C1188.41 72.9366 1188.49 72.6297 1188.49 72.2585ZM1190.15 64.7443C1190.15 65.1193 1190.02 65.4413 1189.75 65.7102C1189.48 65.9754 1189.16 66.108 1188.78 66.108C1188.41 66.108 1188.09 65.9754 1187.83 65.7102C1187.56 65.4413 1187.43 65.1193 1187.43 64.7443C1187.43 64.3807 1187.56 64.0625 1187.83 63.7898C1188.09 63.517 1188.41 63.3807 1188.78 63.3807C1189.03 63.3807 1189.26 63.4451 1189.47 63.5739C1189.68 63.6989 1189.84 63.8636 1189.97 64.0682C1190.09 64.2727 1190.15 64.4981 1190.15 64.7443ZM1190.17 57.4503C1190.17 58.3442 1189.98 59.1132 1189.6 59.7571C1189.22 60.3973 1188.69 60.8897 1188.01 61.2344C1187.33 61.5753 1186.55 61.7457 1185.67 61.7457C1184.78 61.7457 1183.99 61.5734 1183.32 61.2287C1182.64 60.8802 1182.11 60.3859 1181.73 59.7457C1181.35 59.1056 1181.16 58.3442 1181.16 57.4616C1181.16 56.7003 1181.3 56.0336 1181.57 55.4616C1181.85 54.8897 1182.24 54.437 1182.74 54.1037C1183.24 53.7704 1183.83 53.5866 1184.5 53.5526V55.8366C1184.06 55.901 1183.71 56.0715 1183.45 56.348C1183.18 56.6207 1183.05 56.9787 1183.05 57.4219C1183.05 57.7969 1183.15 58.1245 1183.35 58.4048C1183.55 58.6813 1183.85 58.8973 1184.23 59.0526C1184.62 59.2079 1185.09 59.2855 1185.64 59.2855C1186.19 59.2855 1186.67 59.2098 1187.06 59.0582C1187.45 58.9029 1187.74 58.6851 1187.95 58.4048C1188.15 58.1245 1188.26 57.7969 1188.26 57.4219C1188.26 57.1454 1188.2 56.8973 1188.09 56.6776C1187.97 56.4541 1187.81 56.2704 1187.59 56.1264C1187.37 55.9787 1187.11 55.8821 1186.8 55.8366V53.5526C1187.47 53.5904 1188.05 53.7723 1188.56 54.098C1189.07 54.42 1189.46 54.8651 1189.74 55.4332C1190.03 56.0014 1190.17 56.6738 1190.17 57.4503ZM1190.17 48.0597C1190.17 48.9422 1189.98 49.7055 1189.61 50.3494C1189.23 50.9896 1188.7 51.4839 1188.03 51.8324C1187.35 52.1809 1186.56 52.3551 1185.67 52.3551C1184.77 52.3551 1183.98 52.1809 1183.31 51.8324C1182.63 51.4839 1182.1 50.9896 1181.73 50.3494C1181.35 49.7055 1181.16 48.9422 1181.16 48.0597C1181.16 47.1771 1181.35 46.4157 1181.73 45.7756C1182.1 45.1316 1182.63 44.6354 1183.31 44.2869C1183.98 43.9384 1184.77 43.7642 1185.67 43.7642C1186.56 43.7642 1187.35 43.9384 1188.03 44.2869C1188.7 44.6354 1189.23 45.1316 1189.61 45.7756C1189.98 46.4157 1190.17 47.1771 1190.17 48.0597ZM1188.3 48.0483C1188.3 47.6468 1188.18 47.3116 1187.95 47.0426C1187.72 46.7737 1187.41 46.571 1187.01 46.4347C1186.61 46.2945 1186.16 46.2244 1185.65 46.2244C1185.15 46.2244 1184.69 46.2945 1184.3 46.4347C1183.9 46.571 1183.58 46.7737 1183.35 47.0426C1183.12 47.3116 1183.01 47.6468 1183.01 48.0483C1183.01 48.4536 1183.12 48.7945 1183.35 49.071C1183.58 49.3437 1183.9 49.5502 1184.3 49.6903C1184.69 49.8267 1185.15 49.8949 1185.65 49.8949C1186.16 49.8949 1186.61 49.8267 1187.01 49.6903C1187.41 49.5502 1187.72 49.3437 1187.95 49.071C1188.18 48.7945 1188.3 48.4536 1188.3 48.0483ZM1190 42.1903H1181.27V39.8835H1182.81V39.7812C1182.3 39.5994 1181.9 39.2964 1181.6 38.8722C1181.31 38.4479 1181.16 37.9403 1181.16 37.3494C1181.16 36.7509 1181.31 36.2415 1181.61 35.821C1181.9 35.4006 1182.3 35.1203 1182.81 34.9801V34.8892C1182.31 34.7112 1181.91 34.3892 1181.61 33.9233C1181.31 33.4536 1181.16 32.8987 1181.16 32.2585C1181.16 31.4441 1181.42 30.7831 1181.94 30.2756C1182.45 29.7642 1183.18 29.5085 1184.13 29.5085H1190V31.9233H1184.61C1184.12 31.9233 1183.76 32.0521 1183.52 32.3097C1183.27 32.5672 1183.15 32.8892 1183.15 33.2756C1183.15 33.715 1183.29 34.0578 1183.57 34.304C1183.85 34.5502 1184.22 34.6733 1184.67 34.6733H1190V37.0199H1184.56C1184.13 37.0199 1183.79 37.143 1183.53 37.3892C1183.28 37.6316 1183.15 37.9517 1183.15 38.3494C1183.15 38.6184 1183.22 38.8608 1183.36 39.0767C1183.49 39.2888 1183.68 39.4574 1183.92 39.5824C1184.16 39.7074 1184.44 39.7699 1184.76 39.7699H1190V42.1903Z"
              fill="#F5F5F5"
            />
          </svg>
        </div>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            padding: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              position: 'relative',
              width: '85%',
              textTransform: 'uppercase',
              fontSize: '56px',
              fontWeight: '900',
              color: 'hsl(0 0% 100%)',
            }}
          >
            {title}
          </div>
          <div
            style={{
              position: 'absolute',
              left: '1rem',
              bottom: '-1rem',
              background: 'hsl(0 0% 100%)',
              width:'350px',
              height:'16px',
              zIndex: '-1',
            }}
          ></div>
        </div>
        <img
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            height: '75%',
            transform: 'translate(5%, 5%)',
            filter: 'saturation(0.5) grayscale(0.5)',
          }}
          src="https://pics.pof.com/thumbnails/size220/1193/76/68/58423b5aa-5a6d-469d-b077-b38c2497c9a8.jpg"
          alt=""
        />
      </div>
    )

    const result = new ReadableStream({
      async start(controller) {
        await initializedYoga
        await initializedResvg
        const fontData = await acceptedFont
        const svg = await satori(element, {
          width: extendedOptions.width,
          height: extendedOptions.height,
          debug: extendedOptions.debug,
          fonts: extendedOptions.fonts || [
            {
              name: 'Inter',
              data: fontData,
              weight: 900,
              style: 'bold',
            },
          ]
        })

        const result = new Resvg(svg, {
          fitTo: {
            mode: 'width',
            value: extendedOptions.width,
          },
        }).render();
        controller.enqueue(result);
        controller.close();

       
  }
    })

      return new Response(result, {
      headers: {
        'content-type': 'image/png',
        'cache-control': isDev
          ? 'no-cache, no-store'
          : 'public, immutable, no-transform, max-age=31536000',
        ...extendedOptions.headers,
      },
      status: extendedOptions.status,
      statusText: extendedOptions.statusText,
    })
 
    
    } catch (err) {
    console.log(`${err.message}`)
    return new Response('Failed to generate ogImage', {
      status: 500,
    }) 

    }
}
