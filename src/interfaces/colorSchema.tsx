// colorSchema.ts
export interface ColorSchema {
  // Base
  background: string;
  backgroundAlt: string;
  cardBackground: string;
  cardBg: string;

  // Text
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  disabledText: string;

  // Accents
  accentRed: string;
  accentRedHover: string;
  accentGreen: string;
  accentGreenHover: string;
  accentYellow: string;
  accentYellowHover: string;
  accentBlue: string;
  accentBlueHover: string;

  // States
  hoverCard: string;
  active: string;
  focusOutline: string;
  disabledBg: string;

  // Borders & Shadows
  border: string;
  borderLight: string;
  shadowLight: string;
  shadowDark: string;

  // Inputs
  inputBg: string;
  inputBorder: string;
  inputText: string;
  inputPlaceholder: string;

  // Alerts
  successBg: string;
  warningBg: string;
  errorBg: string;
  infoBg: string;

  black: string;
  white: string;
}

export const COLOR_SCHEMA: ColorSchema = {
  // Base
  background: '#1F1F1F',
  backgroundAlt: '#181818',
  cardBackground: '#121212',
  // cardBg: '#121212',
  cardBg: '#000000',

  // Text
  textPrimary: '#F5F5F5',
  textSecondary: '#B0B0B0',
  textMuted: '#8A8A8A',
  disabledText: '#666666',

  // Accents
  accentRed: '#E53935',
  accentRedHover: '#D32F2F',
  accentGreen: '#4CAF50',
  accentGreenHover: '#388E3C',
  accentYellow: '#FFB300',
  accentYellowHover: '#F57C00',
  accentBlue: '#1E88E5',
  accentBlueHover: '#1565C0',

  // States
  hoverCard: '#353535',
  active: '#424242',
  focusOutline: '#64B5F6',
  disabledBg: '#2A2A2A',

  // Borders & Shadows
  border: 'rgba(0,0,0,0.5)',
  borderLight: 'rgba(255,255,255,0.1)',
  shadowLight: '0 1px 3px rgba(0,0,0,0.2)',
  shadowDark: '0 4px 10px rgba(0,0,0,0.6)',

  // Inputs
  inputBg: '#2C2C2C',
  inputBorder: '#444444',
  inputText: '#F5F5F5',
  inputPlaceholder: '#888888',

  // Alerts
  successBg: '#1B5E20',
  warningBg: '#F57C00',
  errorBg: '#B71C1C',
  infoBg: '#0D47A1',

  black: '#000000',
  white: '#FFFFFF',
};
