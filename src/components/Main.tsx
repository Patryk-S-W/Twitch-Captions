import { useState } from 'react'
import { defaults, getAllConfig, saveConfig } from '../lib/config'
import { Subtitler } from './Subtitler'
import { Input } from './Input'
import { Label } from './Label'
import { Range } from './Range'
import { CopyLinkButton } from './CopyLinkButton'
import { ColorInput } from './ColorInput'
import { LanguageSelect } from './LanguageSelect'
import { FontPickerOrCustom } from './FontPickerOrCustom'
import './Main.css'


export function Main() {
  const config = getAllConfig()
  const [hideConfig, setHideConfig] = useState<boolean>(config.hideConfig ?? false)
  const [apiKey, setApiKey] = useState(config.apiKey)
  const minPhraseSepTime = 100
  const [phraseSepTime, setPhraseSepTime] = useState<number>(
    config.phraseSepTime ?? defaults.phraseSepTime
  )
  const [recogLang, setRecogLang] = useState<string>(config.recogLang ?? defaults.recogLang)
  const [transLang, setTransLang] = useState<string>(config.transLang ?? defaults.transLang)
  const [recogFont, setRecogFont] = useState<string>(config.recogFont ?? defaults.recogFont)
  const [customRecogFont, setCustomRecogFont] = useState<string>(
    config.customRecogFont ?? defaults.customRecogFont
  )
  const [useCustomRecogFont, setUseCustomRecogFont] = useState<boolean>(
    config.useCustomRecogFont ?? defaults.useCustomRecogFont
  )
  const [useCustomTransFont, setUseCustomTransFont] = useState<boolean>(
    config.useCustomTransFont ?? defaults.useCustomTransFont
  )
  const [transFont, setTransFont] = useState<string>(config.transFont ?? defaults.transFont)
  const [customTransFont, setCustomTransFont] = useState<string>(
    config.customTransFont ?? defaults.customTransFont
  )
  const [recogFontSize, setRecogFontSize] = useState<number>(
    config.recogFontSize ?? defaults.recogFontSize
  )
  const [recogFontWeight, setRecogFontWeight] = useState<number>(
    config.recogFontWeight ?? defaults.recogFontWeight
  )
  const [recogFontStrokeWidth, setRecogFontStrokeWidth] = useState<number>(
    config.recogFontStrokeWidth ?? defaults.recogFontStrokeWidth
  )
  const [transFontSize, setTransFontSize] = useState<number>(
    config.transFontSize ?? defaults.transFontSize
  )
  const [transFontWeight, setTransFontWeight] = useState<number>(
    config.transFontWeight ?? defaults.transFontWeight
  )
  const [transFontStrokeWidth, setTransFontStrokeWidth] = useState<number>(
    config.transFontStrokeWidth ?? defaults.transFontStrokeWidth
  )
  const [recogFontColor, setRecogFontColor] = useState<string>(
    config.recogFontColor ?? defaults.recogFontColor
  )
  const [transFontColor, setTransFontColor] = useState<string>(
    config.transFontColor ?? defaults.transFontColor
  )
  const [recogFontStrokeColor, setRecogFontStrokeColor] = useState<string>(
    config.recogFontStrokeColor ?? defaults.recogFontStrokeColor
  )
  const [transFontStrokeColor, setTransFontStrokeColor] = useState<string>(
    config.transFontStrokeColor ?? defaults.transFontStrokeColor
  )
  const [bgColor, setBgColor] = useState<string>(config.bgColor ?? defaults.bgColor)
  const [showFontTest, setShowFontTest] = useState<boolean>(
    config.showFontTest ?? defaults.showFontTest
  )
  const [showHistory, setShowHistory] = useState<boolean>(
    config.showHistory ?? defaults.showHistory
  )
  const [recogHeight, setRecogHeight] = useState<number>(config.recogHeight ?? defaults.recogHeight)
  const [transHeight, setTransHeight] = useState<number>(config.transHeight ?? defaults.transHeight)

  const onChangeApiKey = (e: any) => {
    const newApiKey = e?.target?.value ?? ''
    setApiKey(newApiKey)
  }

  const onChangePhraseSepTime = (e: any) => {
    const newValue = e?.target?.value
    let newNum = Number(newValue) || phraseSepTime
    if (newNum < minPhraseSepTime) {
      newNum = minPhraseSepTime
    }
    setPhraseSepTime(newNum)
    saveConfig('phraseSepTime', newNum)
  }

  const onChangeRecogLang = (lang: string) => {
    const newValue = lang || recogLang
    setRecogLang(newValue)
    saveConfig('recogLang', newValue)
  }

  const onChangeTransLang = (lang: string) => {
    const newValue = lang || transLang
    setTransLang(newValue)
    saveConfig('transLang', newValue)
  }

  const onChangeRecogFont = (font: string) => {
    setRecogFont(font)
    saveConfig('recogFont', font)
  }

  const onChangeCustomRecogFont = (font: string) => {
    setCustomRecogFont(font)
    saveConfig('customRecogFont', font)
  }

  const onChangeTransFont = (font: string) => {
    setTransFont(font)
    saveConfig('transFont', font)
  }

  const onChangeCustomTransFont = (font: string) => {
    setCustomTransFont(font)
    saveConfig('customTransFont', font)
  }

  const onToggleCustomRecogFont = (newValue: boolean) => {
    setUseCustomRecogFont(newValue)
    saveConfig('useCustomRecogFont', newValue)
  }

  const onToggleCustomTransFont = (newValue: boolean) => {
    setUseCustomTransFont(newValue)
    saveConfig('useCustomTransFont', newValue)
  }

  const onChangeRecogFontColor = (e: any) => {
    const newValue = e?.target?.value || recogFontColor
    setRecogFontColor(newValue)
    saveConfig('recogFontColor', newValue)
  }

  const onChangeTransFontColor = (e: any) => {
    const newValue = e?.target?.value || transFontColor
    setTransFontColor(newValue)
    saveConfig('transFontColor', newValue)
  }

  const onChangeRecogFontStrokeColor = (e: any) => {
    const newValue = e?.target?.value || recogFontStrokeColor
    setRecogFontStrokeColor(newValue)
    saveConfig('recogFontStrokeColor', newValue)
  }

  const onChangeTransFontStrokeColor = (e: any) => {
    const newValue = e?.target?.value || transFontStrokeColor
    setTransFontStrokeColor(newValue)
    saveConfig('transFontStrokeColor', newValue)
  }

  const onChangeBgColor = (e: any) => {
    const newValue = e?.target?.value || bgColor
    setBgColor(newValue)
    saveConfig('bgColor', newValue)
  }

  const onChangeRecogFontSize = (e: any) => {
    const newValue = e?.target?.value
    const newNum = Number(newValue) || recogFontSize
    setRecogFontSize(newNum)
    saveConfig('recogFontSize', newNum)
  }

  const onChangeRecogFontWeight = (e: any) => {
    const newValue = e?.target?.value
    const newNum = Number(newValue) || recogFontWeight
    setRecogFontWeight(newNum)
    saveConfig('recogFontWeight', newNum)
  }

  const onChangeRecogFontStrokeWidth = (e: any) => {
    const newValue = e?.target?.value
    const newNum = Number(newValue) ?? recogFontStrokeWidth
    setRecogFontStrokeWidth(newNum)
    saveConfig('recogFontStrokeWidth', newNum)
  }

  const onChangeTransFontSize = (e: any) => {
    const newValue = e?.target?.value
    const newNum = Number(newValue) || transFontSize
    setTransFontSize(newNum)
    saveConfig('transFontSize', newNum)
  }

  const onChangeTransFontWeight = (e: any) => {
    const newValue = e?.target?.value
    const newNum = Number(newValue) || transFontWeight
    setTransFontWeight(newNum)
    saveConfig('transFontWeight', newNum)
  }

  const onChangeTransFontStrokeWidth = (e: any) => {
    const newValue = e?.target?.value
    const newNum = Number(newValue) ?? transFontStrokeWidth
    setTransFontStrokeWidth(newNum)
    saveConfig('transFontStrokeWidth', newNum)
  }

  const onChangeShowFontTest = () => {
    const newValue = !showFontTest
    setShowFontTest(newValue)
    saveConfig('showFontTest', newValue)
  }

  const onChangeShowHistory = () => {
    const newValue = !showHistory
    setShowHistory(newValue)
    saveConfig('showHistory', newValue)
  }

  const onToggleHideConfig = () => {
    const newValue = !hideConfig
    setHideConfig(newValue)
    saveConfig('hideConfig', newValue)
  }

  const onChangeRecogHeight = (e: any) => {
    const newValue = e?.target?.value
    const newNum = Number(newValue) ?? recogHeight
    setRecogHeight(newNum)
    saveConfig('recogHeight', newNum)
  }

  const onChangeTransHeight = (e: any) => {
    const newValue = e?.target?.value
    const newNum = Number(newValue) ?? transHeight
    setTransHeight(newNum)
    saveConfig('transHeight', newNum)
  }

  return (
	<div className="h-screen-40 overflow-auto">
      <Subtitler
        apiKey={apiKey}
        phraseSepTime={phraseSepTime}
        recogLang={recogLang}
        transLang={transLang}
        recogFont={useCustomRecogFont ? customRecogFont : recogFont}
        transFont={useCustomTransFont ? customTransFont : transFont}
        bgColor={bgColor}
        recogFontColor={recogFontColor}
        transFontColor={transFontColor}
        recogFontStrokeColor={recogFontStrokeColor}
        transFontStrokeColor={transFontStrokeColor}
        recogFontSize={recogFontSize}
        recogFontWeight={recogFontWeight}
        recogFontStrokeWidth={recogFontStrokeWidth}
        transFontSize={transFontSize}
        transFontWeight={transFontWeight}
        transFontStrokeWidth={transFontStrokeWidth}
        showFontTest={showFontTest}
        showHistory={showHistory}
        hideConfig={hideConfig}
        onToggleHideConfig={onToggleHideConfig}
        recogHeight={recogHeight}
        transHeight={transHeight}
      />
      {!hideConfig && (
        <div className="p-8 border border-gray-200">
          <div className="mt-8 space-y-6">
            <form id="apiKeyForm" name="apiKeyForm">
              <div>
                {/* Better user experience storing API key as "password" in browser's password manager if we include a dummy username */}
                <label hidden={true} htmlFor="dummyUser" />
                <input
                  type="text"
                  name="dummyUser"
                  id="dummyUser"
                  autoComplete="username"
                  size={0}
                  hidden={true}
                  defaultValue="subtitle-chan"
                />
              </div>
              <div>
                <Label htmlFor="apiKey">Klucz API</Label>
                <Input
                  type="password"
                  name="apiKey"
                  id="apiKey"
                  autoComplete="current-password"
                  onChange={onChangeApiKey}
                  defaultValue={apiKey}
                />
              </div>
            </form>
            <div>
              <Label htmlFor="phraseSepTime">Odstęp czasu dla dzielenia tekstu na części (ms)</Label>
              <Input
                name="phraseSepTime"
                id="phraseSepTime"
                onChange={onChangePhraseSepTime}
                defaultValue={phraseSepTime}
              />
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="recogFontColor">Kolor czcionki rozpoznawania głosu</Label>
              <ColorInput
                name="recogFontColor"
                id="recogFontColor"
                defaultValue={recogFontColor}
                onChange={onChangeRecogFontColor}
              />
            </div>
            <div>
              <Label htmlFor="recogFontStrokeColor">Kolor ramki rozpoznawania głosu</Label>
              <ColorInput
                name="recogFontStrokeColor"
                id="recogFontStrokeColor"
                defaultValue={recogFontStrokeColor}
                onChange={onChangeRecogFontStrokeColor}
              />
            </div>
            <div>
              <Label htmlFor="bgColor">Kolor tła</Label>
              <ColorInput
                name="bgColor"
                id="bgColor"
                defaultValue={bgColor}
                onChange={onChangeBgColor}
              />
            </div>
            <div>
              <Label htmlFor="transFontColor">Kolor czcionki tłumaczenia</Label>
              <ColorInput
                type="color"
                name="transFontColor"
                id="transFontColor"
                defaultValue={transFontColor}
                onChange={onChangeTransFontColor}
              />
            </div>
            <div>
              <Label htmlFor="transFontStrokeColor">Kolor ramki tłumaczenia</Label>
              <ColorInput
                type="color"
                name="transFontStrokeColor"
                id="transFontStrokeColor"
                defaultValue={transFontStrokeColor}
                onChange={onChangeTransFontStrokeColor}
              />
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="recogFontSize" value={recogFontSize + 'px'}>
                Rozmiar czcionki rozpoznawania głosu
              </Label>
              <Range
                name="recogFontSize"
                id="recogFontSize"
                min={8}
                max={64}
                step={2}
                defaultValue={recogFontSize}
                onChange={onChangeRecogFontSize}
              />
            </div>
            <div>
              <Label htmlFor="recogFontWeight" value={recogFontWeight + ''}>
                Grubość czcionki rozpoznawania głosu
              </Label>
              <Range
                name="recogFontWeight"
                id="recogFontWeight"
                min={100}
                max={900}
                step={100}
                defaultValue={recogFontWeight}
                onChange={onChangeRecogFontWeight}
              />
            </div>
            <div>
              <Label htmlFor="recogFontStrokeWidth" value={recogFontStrokeWidth + 'px'}>
                Ramka rozpoznawania głosu
              </Label>
              <Range
                name="recogFontStrokeWidth"
                id="recogFontStrokeWidth"
                min={0}
                max={32}
                step={1}
                defaultValue={recogFontStrokeWidth}
                onChange={onChangeRecogFontStrokeWidth}
              />
            </div>
            <div>
              <Label htmlFor="transFontSize" value={transFontSize + 'px'}>
                Rozmiar czcionki tłumaczenia
              </Label>
              <Range
                name="transFontSize"
                id="transFontSize"
                min={8}
                max={64}
                step={2}
                defaultValue={transFontSize}
                onChange={onChangeTransFontSize}
              />
            </div>
            <div>
              <Label htmlFor="transFontWeight" value={transFontWeight + ''}>
                Grubość czcionki tłumaczenia
              </Label>
              <Range
                name="transFontWeight"
                id="transFontWeight"
                min={100}
                max={900}
                step={100}
                defaultValue={transFontWeight}
                onChange={onChangeTransFontWeight}
              />
            </div>
            <div>
              <Label htmlFor="transFontStrokeWidth" value={transFontStrokeWidth + 'px'}>
                Ramka tłumaczenia
              </Label>
              <Range
                name="transFontStrokeWidth"
                id="transFontStrokeWidth"
                min={0}
                max={32}
                step={1}
                defaultValue={transFontStrokeWidth}
                onChange={onChangeTransFontStrokeWidth}
              />
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="recogHeight" value={recogHeight + 'rem'}>
                Wysokość bloku rozpoznawania głosu
              </Label>
              <Range
                name="recogHeight"
                id="recogHeight"
                min={0}
                max={36}
                step={1}
                defaultValue={recogHeight}
                onChange={onChangeRecogHeight}
              />
            </div>
            <div>
              <Label htmlFor="transHeight" value={transHeight + 'rem'}>
                Wysokość bloku tłumaczenia
              </Label>
              <Range
                name="transHeight"
                id="transHeight"
                min={0}
                max={36}
                step={1}
                defaultValue={transHeight}
                onChange={onChangeTransHeight}
              />
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="recogLang">
                Język rozpoznawania głosu{' '}
                <sup>
                  <a
                    href="https://stackoverflow.com/questions/14257598"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (dostępne języki)
                  </a>
                </sup>
              </Label>
              <span className="inline-flex gap-x-4">
                <LanguageSelect
                  id="recogLang"
                  defaultValue={recogLang}
                  onChange={onChangeRecogLang}
                />
              </span>
            </div>
            <div>
              <Label htmlFor="recogFont">Czcionka rozpoznawania głosu</Label>
              <FontPickerOrCustom
                id="recogFont"
                defaultValue={recogFont}
                defaultValueCustom={customRecogFont}
                onChange={onChangeRecogFont}
                onChangeCustom={onChangeCustomRecogFont}
                useCustom={useCustomRecogFont}
                onToggleCustom={onToggleCustomRecogFont}
              />
            </div>
            <div>
              <Label htmlFor="transLang">
                Język tłumaczenia{' '}
                <sup>
                  <a
                    href="https://cloud.google.com/translate/docs/languages"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (dostępne języki)
                  </a>
                </sup>
              </Label>
              <span className="inline-flex gap-x-4">
                <LanguageSelect
                  id="transLang"
                  defaultValue={transLang}
                  onChange={onChangeTransLang}
                />
              </span>
            </div>
            <div>
              <Label htmlFor="transFont">Czcionka tłumaczenia</Label>
              <FontPickerOrCustom
                id="transFont"
                defaultValue={transFont}
                defaultValueCustom={customTransFont}
                onChange={onChangeTransFont}
                onChangeCustom={onChangeCustomTransFont}
                useCustom={useCustomTransFont}
                onToggleCustom={onToggleCustomTransFont}
              />
            </div>
          </div>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <CopyLinkButton />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <span className="inline-flex gap-x-4 h-4 items-baseline">
                <input
                  id="showFontTest"
                  name="showFontTest"
                  type="checkbox"
                  checked={showFontTest}
                  onChange={onChangeShowFontTest}
                  className="disabled:opacity-50"
                />
                <Label htmlFor="showFontTest">Pokaż test czcionki?</Label>
              </span>
              <span className="inline-flex gap-x-4 h-4 items-baseline hidden">
                <input
                  id="showHistory"
                  name="showHistory"
                  type="checkbox"
                  checked={showHistory}
                  onChange={onChangeShowHistory}
                  className="disabled:opacity-50"
                />
                <Label htmlFor="showHistory">Pokaż historię?</Label>
              </span>
            </div>
          </div>
          </div>
      )}
    </div>
  )
}
