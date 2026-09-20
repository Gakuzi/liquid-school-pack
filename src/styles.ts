import { css } from 'lit';

export const liquidGlassStyles = css`
  :host {
    --glass-bg: rgba(255, 255, 255, 0.18);
    --glass-bg-hover: rgba(255, 255, 255, 0.28);
    --glass-border: rgba(255, 255, 255, 0.35);
    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.12);
    --glass-blur: blur(14px);
    --text-primary: var(--primary-text-color, #1f2937);
    --text-secondary: var(--secondary-text-color, #6b7280);
    --accent-blue: #38bdf8;
    --accent-green: #34d399;
  }

  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: var(--glass-shadow);
    padding: 20px;
    color: var(--text-primary);
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
    transition: all 0.3s ease;
  }

  .glass-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .glass-title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .glass-chip-nav {
    display: flex;
    gap: 8px;
    background: rgba(0, 0, 0, 0.05);
    padding: 4px;
    border-radius: 12px;
  }

  .glass-chip-btn {
    border: none;
    background: transparent;
    padding: 6px 14px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    transition: all 0.2s ease;
  }

  .glass-chip-btn.active {
    background: rgba(255, 255, 255, 0.6);
    color: var(--text-primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .glass-item {
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 14px;
    padding: 10px 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .glass-item:hover {
    transform: translateY(-2px);
    background: var(--glass-bg-hover);
  }
`;
