// colorSchema.ts
export interface ColorSchema {
  background: string;
  cardBackground: string;
  textPrimary: string;
  textSecondary: string;
  accentRed: string;
  accentRedHover: string;
  hoverCard: string;
  border: string;
}

export const COLOR_SCHEMA: ColorSchema = {
  background: '#1F1F1F',
  cardBackground: '#2C2C2C',
  textPrimary: '#F5F5F5',
  textSecondary: '#B0B0B0',
  accentRed: '#E53935',
  accentRedHover: '#D32F2F',
  hoverCard: '#353535',
  border: 'rgba(0,0,0,0.5)',
};
