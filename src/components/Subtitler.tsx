import { useState } from 'react'
import SpeechRecognition, { useSubtitles } from '../lib/useSubtitles'
import { Subtitle } from './Subtitle'
import { IconToggle } from './IconToggle'
import { MicIcon } from './icons/MicIcon'
import { SettingsIcon } from './icons/SettingsIcon'

export interface SubtitlerProps {
  apiKey?: string
  phraseSepTime: number
  recogLang: string
  transLang: string
  recogFont: string
  transFont: string
  bgColor: string
  recogFontColor: string
  transFontColor: string
  recogFontStrokeColor: string
  transFontStrokeColor: string
  recogFontSize: number
  recogFontWeight: number
  recogFontStrokeWidth: number
  transFontSize: number
  transFontWeight: number
  transFontStrokeWidth: number
  showFontTest?: boolean
  showHistory?: boolean
  hideConfig?: boolean
  onToggleHideConfig?: () => void
  recogHeight?: number
  transHeight?: number
}

export function Subtitler({
  apiKey,
  phraseSepTime,
  recogLang,
  transLang,
  recogFont,
  transFont,
  bgColor,
  recogFontColor,
  transFontColor,
  recogFontStrokeColor,
  transFontStrokeColor,
  recogFontSize,
  recogFontWeight,
  recogFontStrokeWidth,
  transFontSize,
  transFontWeight,
  transFontStrokeWidth,
  showFontTest,
  showHistory,
  hideConfig = false,
  onToggleHideConfig,
  recogHeight,
  transHeight,
}: Readonly<SubtitlerProps>) {
  const [enabled, setEnabled] = useState(false)

  const {
    transcript,
    listening,
    reset,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    translation,
  } = useSubtitles({
    recogLang,
    transLang,
    apiKey,
    phraseSepTime,
    enabled,
    showHistory,
  })

  const handleStart = () => {
    setEnabled(true)
    SpeechRecognition.startListening({
      language: recogLang,
      continuous: true,
    })
  }

  const handleStop = () => {
    setEnabled(false)
    SpeechRecognition.abortListening()
  }

  const handleReset = () => {
    reset()
  }

  let error
  if (!browserSupportsSpeechRecognition) {
    error = "Nie wspierane rozpoznawanie mowy :("
  } else if (!isMicrophoneAvailable) {
    error = 'Zezwól tej aplikacji na dostęp do mikrofonu'
  } else if (!navigator.onLine) {
    error = 'Urządzenie offline! Rozpoznawanie mowy wymaga połączenia z internetem'
  }
  if (error) {
    return (
        <p>{error}</p>
    )
  }

  const testText = `Qui accusamus iure qui tempora laboriosam ut ut. Ut voluptatem ut repudiandae. Ipsam distinctio aut sed architecto est velit fugit velit. Soluta nesciunt consequatur labore.
Et et consequuntur reiciendis aut. Sunt exercitationem repellendus id est officiis iure inventore illo. Vel expedita omnis incidunt dolor numquam est odit ipsa. Quis ut occaecati architecto. Rem nisi repudiandae in id corporis. Quia ut dolor quo alias ut rerum ad.
Quia doloribus repellendus in ratione ab molestiae vitae. Quam quisquam consequuntur in sunt debitis. Ratione et voluptas praesentium aspernatur suscipit sint quia amet. Rerum voluptate aspernatur vel.
Commodi deserunt iste quas. Animi sit blanditiis voluptatem itaque dolore. Non ut quaerat aut explicabo amet. Enim repellat et facere. Ut natus possimus eum inventore. Quaerat rerum sit quo aut tempore optio.
Nulla architecto corrupti et debitis rem. Ut soluta dolorum soluta sint qui dolores possimus amet. Modi beatae cumque officia consectetur numquam aperiam ut et.`

  return (
    <>
      {showFontTest && (
        <Subtitle
          fontFamily={recogFont}
          value={testText}
          bottomBorder
          inputId="testSubtitles"
          bgColor={bgColor}
          fontColor={recogFontColor}
          fontStrokeColor={recogFontStrokeColor}
          fontSize={recogFontSize}
          fontWeight={recogFontWeight}
          fontStrokeWidth={recogFontStrokeWidth}
          scrollBottom={false}
          height={recogHeight}
        />
      )}
      <Subtitle
        fontFamily={recogFont}
        value={transcript}
        inputId="recogSubtitles"
        bgColor={bgColor}
        fontColor={recogFontColor}
        fontStrokeColor={recogFontStrokeColor}
        fontSize={recogFontSize}
        fontWeight={recogFontWeight}
        fontStrokeWidth={recogFontStrokeWidth}
        height={recogHeight}
      />
      <Subtitle
        fontFamily={transFont}
        value={translation}
        inputId="transSubtitles"
        bgColor={bgColor}
        fontColor={transFontColor}
        fontStrokeColor={transFontStrokeColor}
        fontSize={transFontSize}
        fontWeight={transFontWeight}
        fontStrokeWidth={transFontStrokeWidth}
        scrollBottom={showHistory}
        height={transHeight}
      />
      <div className="p-8 border border-gray-200">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <span className="py-2 px-4">
              <MicIcon stroke={listening ? 'red' : 'black'} fill={listening ? 'red' : 'none'} />
            </span>
            {!enabled && (
              <button
                onClick={handleStart}
                className="w-32 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50"
              >
                Start
              </button>
            )}
            {enabled && (
              <button
                onClick={handleStop}
                className="w-32 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50"
              >
                Stop
              </button>
            )}
            <button
              onClick={handleReset}
              className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              Reset
            </button>
          </div>
          <div className="space-x-4">
            <IconToggle
              id="settingsToggle"
              icon={<SettingsIcon fill={'white'} />}
              label="Ustawienia"
              checked={!hideConfig}
              onChange={onToggleHideConfig}
            />
          </div>
        </div>
      </div>
    </>
  )
}
