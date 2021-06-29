import { IconType } from 'react-icons';

import {
  WiAlien,
  WiBarometer,
  WiCelsius,
  WiCloudDown,
  WiCloudRefresh,
  WiCloudUp,
  WiCloud,
  WiCloudyGusts,
  WiCloudyWindy,
  WiCloudy,
  WiDayCloudyGusts,
  WiDayCloudyHigh,
  WiDayCloudyWindy,
  WiDayCloudy,
  WiDayFog,
  WiDayHail,
  WiDayHaze,
  WiDayLightWind,
  WiDayLightning,
  WiDayRainMix,
  WiDayRainWind,
  WiDayRain,
  WiDayShowers,
  WiDaySleetStorm,
  WiDaySleet,
  WiDaySnowThunderstorm,
  WiDaySnowWind,
  WiDaySnow,
  WiDaySprinkle,
  WiDayStormShowers,
  WiDaySunnyOvercast,
  WiDaySunny,
  WiDayThunderstorm,
  WiDayWindy,
  WiDegrees,
  WiDirectionDownLeft,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionRight,
  WiDirectionUpLeft,
  WiDirectionUpRight,
  WiDirectionUp,
  WiDust,
  WiEarthquake,
  WiFahrenheit,
  WiFire,
  WiFlood,
  WiFog,
  WiGaleWarning,
  WiHail,
  WiHorizonAlt,
  WiHorizon,
  WiHot,
  WiHumidity,
  WiHurricaneWarning,
  WiHurricane,
  WiLightning,
  WiLunarEclipse,
  WiMeteor,
  WiMoonAltFirstQuarter,
  WiMoonAltFull,
  WiMoonAltNew,
  WiMoonAltThirdQuarter,
  WiMoonAltWaningCrescent1,
  WiMoonAltWaningCrescent2,
  WiMoonAltWaningCrescent3,
  WiMoonAltWaningCrescent4,
  WiMoonAltWaningCrescent5,
  WiMoonAltWaningCrescent6,
  WiMoonAltWaningGibbous1,
  WiMoonAltWaningGibbous2,
  WiMoonAltWaningGibbous3,
  WiMoonAltWaningGibbous4,
  WiMoonAltWaningGibbous5,
  WiMoonAltWaningGibbous6,
  WiMoonAltWaxingCrescent1,
  WiMoonAltWaxingCrescent2,
  WiMoonAltWaxingCrescent3,
  WiMoonAltWaxingCrescent4,
  WiMoonAltWaxingCrescent5,
  WiMoonAltWaxingCrescent6,
  WiMoonAltWaxingGibbous1,
  WiMoonAltWaxingGibbous2,
  WiMoonAltWaxingGibbous3,
  WiMoonAltWaxingGibbous4,
  WiMoonAltWaxingGibbous5,
  WiMoonAltWaxingGibbous6,
  WiMoonFirstQuarter,
  WiMoonFull,
  WiMoonNew,
  WiMoonThirdQuarter,
  WiMoonWaningCrescent1,
  WiMoonWaningCrescent2,
  WiMoonWaningCrescent3,
  WiMoonWaningCrescent4,
  WiMoonWaningCrescent5,
  WiMoonWaningCrescent6,
  WiMoonWaningGibbous1,
  WiMoonWaningGibbous2,
  WiMoonWaningGibbous3,
  WiMoonWaningGibbous4,
  WiMoonWaningGibbous5,
  WiMoonWaningGibbous6,
  WiMoonWaxingCrescent1,
  WiMoonWaxingCrescent2,
  WiMoonWaxingCrescent3,
  WiMoonWaxingCrescent4,
  WiMoonWaxingCrescent5,
  WiMoonWaxingCrescent6,
  WiMoonWaxingGibbous1,
  WiMoonWaxingGibbous2,
  WiMoonWaxingGibbous3,
  WiMoonWaxingGibbous4,
  WiMoonWaxingGibbous5,
  WiMoonWaxingGibbous6,
  WiMoonrise,
  WiMoonset,
  WiNa,
  WiNightAltCloudyGusts,
  WiNightAltCloudyHigh,
  WiNightAltCloudyWindy,
  WiNightAltCloudy,
  WiNightAltHail,
  WiNightAltLightning,
  WiNightAltPartlyCloudy,
  WiNightAltRainMix,
  WiNightAltRainWind,
  WiNightAltRain,
  WiNightAltShowers,
  WiNightAltSleetStorm,
  WiNightAltSleet,
  WiNightAltSnowThunderstorm,
  WiNightAltSnowWind,
  WiNightAltSnow,
  WiNightAltSprinkle,
  WiNightAltStormShowers,
  WiNightAltThunderstorm,
  WiNightClear,
  WiNightCloudyGusts,
  WiNightCloudyHigh,
  WiNightCloudyWindy,
  WiNightCloudy,
  WiNightFog,
  WiNightHail,
  WiNightLightning,
  WiNightPartlyCloudy,
  WiNightRainMix,
  WiNightRainWind,
  WiNightRain,
  WiNightShowers,
  WiNightSleetStorm,
  WiNightSleet,
  WiNightSnowThunderstorm,
  WiNightSnowWind,
  WiNightSnow,
  WiNightSprinkle,
  WiNightStormShowers,
  WiNightThunderstorm,
  WiRainMix,
  WiRainWind,
  WiRain,
  WiRaindrop,
  WiRaindrops,
  WiRefreshAlt,
  WiRefresh,
  WiSandstorm,
  WiShowers,
  WiSleet,
  WiSmallCraftAdvisory,
  WiSmog,
  WiSmoke,
  WiSnowWind,
  WiSnow,
  WiSnowflakeCold,
  WiSolarEclipse,
  WiSprinkle,
  WiStars,
  WiStormShowers,
  WiStormWarning,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometerExterior,
  WiThermometerInternal,
  WiThermometer,
  WiThunderstorm,
  WiTime1,
  WiTime10,
  WiTime11,
  WiTime12,
  WiTime2,
  WiTime3,
  WiTime4,
  WiTime5,
  WiTime6,
  WiTime7,
  WiTime8,
  WiTime9,
  WiTornado,
  WiTrain,
  WiTsunami,
  WiUmbrella,
  WiVolcano,
  WiWindBeaufort0,
  WiWindBeaufort1,
  WiWindBeaufort10,
  WiWindBeaufort11,
  WiWindBeaufort12,
  WiWindBeaufort2,
  WiWindBeaufort3,
  WiWindBeaufort4,
  WiWindBeaufort5,
  WiWindBeaufort6,
  WiWindBeaufort7,
  WiWindBeaufort8,
  WiWindBeaufort9,
  WiWindDeg,
  WiWindy
} from 'react-icons/wi';

export interface IWiIcon{
  WiAlien: IconType;
  WiBarometer: IconType;
  WiCelsius: IconType;
  WiCloudDown: IconType;
  WiCloudRefresh: IconType;
  WiCloudUp: IconType;
  WiCloud: IconType;
  WiCloudyGusts: IconType;
  WiCloudyWindy: IconType;
  WiCloudy: IconType;
  WiDayCloudyGusts: IconType;
  WiDayCloudyHigh: IconType;
  WiDayCloudyWindy: IconType;
  WiDayCloudy: IconType;
  WiDayFog: IconType;
  WiDayHail: IconType;
  WiDayHaze: IconType;
  WiDayLightWind: IconType;
  WiDayLightning: IconType;
  WiDayRainMix: IconType;
  WiDayRainWind: IconType;
  WiDayRain: IconType;
  WiDayShowers: IconType;
  WiDaySleetStorm: IconType;
  WiDaySleet: IconType;
  WiDaySnowThunderstorm: IconType;
  WiDaySnowWind: IconType;
  WiDaySnow: IconType;
  WiDaySprinkle: IconType;
  WiDayStormShowers: IconType;
  WiDaySunnyOvercast: IconType;
  WiDaySunny: IconType;
  WiDayThunderstorm: IconType;
  WiDayWindy: IconType;
  WiDegrees: IconType;
  WiDirectionDownLeft: IconType;
  WiDirectionDownRight: IconType;
  WiDirectionDown: IconType;
  WiDirectionLeft: IconType;
  WiDirectionRight: IconType;
  WiDirectionUpLeft: IconType;
  WiDirectionUpRight: IconType;
  WiDirectionUp: IconType;
  WiDust: IconType;
  WiEarthquake: IconType;
  WiFahrenheit: IconType;
  WiFire: IconType;
  WiFlood: IconType;
  WiFog: IconType;
  WiGaleWarning: IconType;
  WiHail: IconType;
  WiHorizonAlt: IconType;
  WiHorizon: IconType;
  WiHot: IconType;
  WiHumidity: IconType;
  WiHurricaneWarning: IconType;
  WiHurricane: IconType;
  WiLightning: IconType;
  WiLunarEclipse: IconType;
  WiMeteor: IconType;
  WiMoonAltFirstQuarter: IconType;
  WiMoonAltFull: IconType;
  WiMoonAltNew: IconType;
  WiMoonAltThirdQuarter: IconType;
  WiMoonAltWaningCrescent1: IconType;
  WiMoonAltWaningCrescent2: IconType;
  WiMoonAltWaningCrescent3: IconType;
  WiMoonAltWaningCrescent4: IconType;
  WiMoonAltWaningCrescent5: IconType;
  WiMoonAltWaningCrescent6: IconType;
  WiMoonAltWaningGibbous1: IconType;
  WiMoonAltWaningGibbous2: IconType;
  WiMoonAltWaningGibbous3: IconType;
  WiMoonAltWaningGibbous4: IconType;
  WiMoonAltWaningGibbous5: IconType;
  WiMoonAltWaningGibbous6: IconType;
  WiMoonAltWaxingCrescent1: IconType;
  WiMoonAltWaxingCrescent2: IconType;
  WiMoonAltWaxingCrescent3: IconType;
  WiMoonAltWaxingCrescent4: IconType;
  WiMoonAltWaxingCrescent5: IconType;
  WiMoonAltWaxingCrescent6: IconType;
  WiMoonAltWaxingGibbous1: IconType;
  WiMoonAltWaxingGibbous2: IconType;
  WiMoonAltWaxingGibbous3: IconType;
  WiMoonAltWaxingGibbous4: IconType;
  WiMoonAltWaxingGibbous5: IconType;
  WiMoonAltWaxingGibbous6: IconType;
  WiMoonFirstQuarter: IconType;
  WiMoonFull: IconType;
  WiMoonNew: IconType;
  WiMoonThirdQuarter: IconType;
  WiMoonWaningCrescent1: IconType;
  WiMoonWaningCrescent2: IconType;
  WiMoonWaningCrescent3: IconType;
  WiMoonWaningCrescent4: IconType;
  WiMoonWaningCrescent5: IconType;
  WiMoonWaningCrescent6: IconType;
  WiMoonWaningGibbous1: IconType;
  WiMoonWaningGibbous2: IconType;
  WiMoonWaningGibbous3: IconType;
  WiMoonWaningGibbous4: IconType;
  WiMoonWaningGibbous5: IconType;
  WiMoonWaningGibbous6: IconType;
  WiMoonWaxingCrescent1: IconType;
  WiMoonWaxingCrescent2: IconType;
  WiMoonWaxingCrescent3: IconType;
  WiMoonWaxingCrescent4: IconType;
  WiMoonWaxingCrescent5: IconType;
  WiMoonWaxingCrescent6: IconType;
  WiMoonWaxingGibbous1: IconType;
  WiMoonWaxingGibbous2: IconType;
  WiMoonWaxingGibbous3: IconType;
  WiMoonWaxingGibbous4: IconType;
  WiMoonWaxingGibbous5: IconType;
  WiMoonWaxingGibbous6: IconType;
  WiMoonrise: IconType;
  WiMoonset: IconType;
  WiNa: IconType;
  WiNightAltCloudyGusts: IconType;
  WiNightAltCloudyHigh: IconType;
  WiNightAltCloudyWindy: IconType;
  WiNightAltCloudy: IconType;
  WiNightAltHail: IconType;
  WiNightAltLightning: IconType;
  WiNightAltPartlyCloudy: IconType;
  WiNightAltRainMix: IconType;
  WiNightAltRainWind: IconType;
  WiNightAltRain: IconType;
  WiNightAltShowers: IconType;
  WiNightAltSleetStorm: IconType;
  WiNightAltSleet: IconType;
  WiNightAltSnowThunderstorm: IconType;
  WiNightAltSnowWind: IconType;
  WiNightAltSnow: IconType;
  WiNightAltSprinkle: IconType;
  WiNightAltStormShowers: IconType;
  WiNightAltThunderstorm: IconType;
  WiNightClear: IconType;
  WiNightCloudyGusts: IconType;
  WiNightCloudyHigh: IconType;
  WiNightCloudyWindy: IconType;
  WiNightCloudy: IconType;
  WiNightFog: IconType;
  WiNightHail: IconType;
  WiNightLightning: IconType;
  WiNightPartlyCloudy: IconType;
  WiNightRainMix: IconType;
  WiNightRainWind: IconType;
  WiNightRain: IconType;
  WiNightShowers: IconType;
  WiNightSleetStorm: IconType;
  WiNightSleet: IconType;
  WiNightSnowThunderstorm: IconType;
  WiNightSnowWind: IconType;
  WiNightSnow: IconType;
  WiNightSprinkle: IconType;
  WiNightStormShowers: IconType;
  WiNightThunderstorm: IconType;
  WiRainMix: IconType;
  WiRainWind: IconType;
  WiRain: IconType;
  WiRaindrop: IconType;
  WiRaindrops: IconType;
  WiRefreshAlt: IconType;
  WiRefresh: IconType;
  WiSandstorm: IconType;
  WiShowers: IconType;
  WiSleet: IconType;
  WiSmallCraftAdvisory: IconType;
  WiSmog: IconType;
  WiSmoke: IconType;
  WiSnowWind: IconType;
  WiSnow: IconType;
  WiSnowflakeCold: IconType;
  WiSolarEclipse: IconType;
  WiSprinkle: IconType;
  WiStars: IconType;
  WiStormShowers: IconType;
  WiStormWarning: IconType;
  WiStrongWind: IconType;
  WiSunrise: IconType;
  WiSunset: IconType;
  WiThermometerExterior: IconType;
  WiThermometerInternal: IconType;
  WiThermometer: IconType;
  WiThunderstorm: IconType;
  WiTime1: IconType;
  WiTime10: IconType;
  WiTime11: IconType;
  WiTime12: IconType;
  WiTime2: IconType;
  WiTime3: IconType;
  WiTime4: IconType;
  WiTime5: IconType;
  WiTime6: IconType;
  WiTime7: IconType;
  WiTime8: IconType;
  WiTime9: IconType;
  WiTornado: IconType;
  WiTrain: IconType;
  WiTsunami: IconType;
  WiUmbrella: IconType;
  WiVolcano: IconType;
  WiWindBeaufort0: IconType;
  WiWindBeaufort1: IconType;
  WiWindBeaufort10: IconType;
  WiWindBeaufort11: IconType;
  WiWindBeaufort12: IconType;
  WiWindBeaufort2: IconType;
  WiWindBeaufort3: IconType;
  WiWindBeaufort4: IconType;
  WiWindBeaufort5: IconType;
  WiWindBeaufort6: IconType;
  WiWindBeaufort7: IconType;
  WiWindBeaufort8: IconType;
  WiWindBeaufort9: IconType;
  WiWindDeg: IconType;
  WiWindy: IconType;
}

export const WiIcon: IWiIcon = {
  WiAlien,
  WiBarometer,
  WiCelsius,
  WiCloudDown,
  WiCloudRefresh,
  WiCloudUp,
  WiCloud,
  WiCloudyGusts,
  WiCloudyWindy,
  WiCloudy,
  WiDayCloudyGusts,
  WiDayCloudyHigh,
  WiDayCloudyWindy,
  WiDayCloudy,
  WiDayFog,
  WiDayHail,
  WiDayHaze,
  WiDayLightWind,
  WiDayLightning,
  WiDayRainMix,
  WiDayRainWind,
  WiDayRain,
  WiDayShowers,
  WiDaySleetStorm,
  WiDaySleet,
  WiDaySnowThunderstorm,
  WiDaySnowWind,
  WiDaySnow,
  WiDaySprinkle,
  WiDayStormShowers,
  WiDaySunnyOvercast,
  WiDaySunny,
  WiDayThunderstorm,
  WiDayWindy,
  WiDegrees,
  WiDirectionDownLeft,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionRight,
  WiDirectionUpLeft,
  WiDirectionUpRight,
  WiDirectionUp,
  WiDust,
  WiEarthquake,
  WiFahrenheit,
  WiFire,
  WiFlood,
  WiFog,
  WiGaleWarning,
  WiHail,
  WiHorizonAlt,
  WiHorizon,
  WiHot,
  WiHumidity,
  WiHurricaneWarning,
  WiHurricane,
  WiLightning,
  WiLunarEclipse,
  WiMeteor,
  WiMoonAltFirstQuarter,
  WiMoonAltFull,
  WiMoonAltNew,
  WiMoonAltThirdQuarter,
  WiMoonAltWaningCrescent1,
  WiMoonAltWaningCrescent2,
  WiMoonAltWaningCrescent3,
  WiMoonAltWaningCrescent4,
  WiMoonAltWaningCrescent5,
  WiMoonAltWaningCrescent6,
  WiMoonAltWaningGibbous1,
  WiMoonAltWaningGibbous2,
  WiMoonAltWaningGibbous3,
  WiMoonAltWaningGibbous4,
  WiMoonAltWaningGibbous5,
  WiMoonAltWaningGibbous6,
  WiMoonAltWaxingCrescent1,
  WiMoonAltWaxingCrescent2,
  WiMoonAltWaxingCrescent3,
  WiMoonAltWaxingCrescent4,
  WiMoonAltWaxingCrescent5,
  WiMoonAltWaxingCrescent6,
  WiMoonAltWaxingGibbous1,
  WiMoonAltWaxingGibbous2,
  WiMoonAltWaxingGibbous3,
  WiMoonAltWaxingGibbous4,
  WiMoonAltWaxingGibbous5,
  WiMoonAltWaxingGibbous6,
  WiMoonFirstQuarter,
  WiMoonFull,
  WiMoonNew,
  WiMoonThirdQuarter,
  WiMoonWaningCrescent1,
  WiMoonWaningCrescent2,
  WiMoonWaningCrescent3,
  WiMoonWaningCrescent4,
  WiMoonWaningCrescent5,
  WiMoonWaningCrescent6,
  WiMoonWaningGibbous1,
  WiMoonWaningGibbous2,
  WiMoonWaningGibbous3,
  WiMoonWaningGibbous4,
  WiMoonWaningGibbous5,
  WiMoonWaningGibbous6,
  WiMoonWaxingCrescent1,
  WiMoonWaxingCrescent2,
  WiMoonWaxingCrescent3,
  WiMoonWaxingCrescent4,
  WiMoonWaxingCrescent5,
  WiMoonWaxingCrescent6,
  WiMoonWaxingGibbous1,
  WiMoonWaxingGibbous2,
  WiMoonWaxingGibbous3,
  WiMoonWaxingGibbous4,
  WiMoonWaxingGibbous5,
  WiMoonWaxingGibbous6,
  WiMoonrise,
  WiMoonset,
  WiNa,
  WiNightAltCloudyGusts,
  WiNightAltCloudyHigh,
  WiNightAltCloudyWindy,
  WiNightAltCloudy,
  WiNightAltHail,
  WiNightAltLightning,
  WiNightAltPartlyCloudy,
  WiNightAltRainMix,
  WiNightAltRainWind,
  WiNightAltRain,
  WiNightAltShowers,
  WiNightAltSleetStorm,
  WiNightAltSleet,
  WiNightAltSnowThunderstorm,
  WiNightAltSnowWind,
  WiNightAltSnow,
  WiNightAltSprinkle,
  WiNightAltStormShowers,
  WiNightAltThunderstorm,
  WiNightClear,
  WiNightCloudyGusts,
  WiNightCloudyHigh,
  WiNightCloudyWindy,
  WiNightCloudy,
  WiNightFog,
  WiNightHail,
  WiNightLightning,
  WiNightPartlyCloudy,
  WiNightRainMix,
  WiNightRainWind,
  WiNightRain,
  WiNightShowers,
  WiNightSleetStorm,
  WiNightSleet,
  WiNightSnowThunderstorm,
  WiNightSnowWind,
  WiNightSnow,
  WiNightSprinkle,
  WiNightStormShowers,
  WiNightThunderstorm,
  WiRainMix,
  WiRainWind,
  WiRain,
  WiRaindrop,
  WiRaindrops,
  WiRefreshAlt,
  WiRefresh,
  WiSandstorm,
  WiShowers,
  WiSleet,
  WiSmallCraftAdvisory,
  WiSmog,
  WiSmoke,
  WiSnowWind,
  WiSnow,
  WiSnowflakeCold,
  WiSolarEclipse,
  WiSprinkle,
  WiStars,
  WiStormShowers,
  WiStormWarning,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometerExterior,
  WiThermometerInternal,
  WiThermometer,
  WiThunderstorm,
  WiTime1,
  WiTime10,
  WiTime11,
  WiTime12,
  WiTime2,
  WiTime3,
  WiTime4,
  WiTime5,
  WiTime6,
  WiTime7,
  WiTime8,
  WiTime9,
  WiTornado,
  WiTrain,
  WiTsunami,
  WiUmbrella,
  WiVolcano,
  WiWindBeaufort0,
  WiWindBeaufort1,
  WiWindBeaufort10,
  WiWindBeaufort11,
  WiWindBeaufort12,
  WiWindBeaufort2,
  WiWindBeaufort3,
  WiWindBeaufort4,
  WiWindBeaufort5,
  WiWindBeaufort6,
  WiWindBeaufort7,
  WiWindBeaufort8,
  WiWindBeaufort9,
  WiWindDeg,
  WiWindy
}