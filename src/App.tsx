import type { IPASymbol, UserSettings, UserProgress } from './types/ipa';
import { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { HomeScreen } from './components/home/HomeScreen';
import { IPAChart } from './components/chart/IPAChart';
import { SymbolDetail } from './components/symbol/SymbolDetail';
import { PracticeView } from './components/practice/PracticeView';
import { IPAKeyboard } from './components/keyboard/IPAKeyboard';
import { ProgressView } from './components/progress/ProgressView';
import { SearchView } from './components/search/SearchView';
import { SettingsView } from './components/settings/SettingsView';
import { storageService } from './services/storageService';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [settings, setSettings] = useState<UserSettings>(() => storageService.getSettings());
  const [progress, setProgress] = useState<UserProgress>(() => storageService.getProgress());
  const [selectedSymbol, setSelectedSymbol] = useState<IPASymbol | null>(null);

  const handleSettingsChange = (newSettings: UserSettings) => {
    setSettings(newSettings);
    storageService.saveSettings(newSettings);
  };

  const handleProgressChange = (newProgress: UserProgress) => {
    setProgress(newProgress);
    storageService.saveProgress(newProgress);
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomeScreen
            progress={progress}
            settings={settings}
            onNavigate={(tab) => setCurrentTab(tab)}
            onSelectSymbol={(symbol) => setSelectedSymbol(symbol)}
          />
        );
      case 'chart':
        return (
          <IPAChart
            settings={settings}
            onSelectSymbol={(symbol) => setSelectedSymbol(symbol)}
          />
        );
      case 'practice':
        return (
          <PracticeView
            settings={settings}
            progress={progress}
            onProgressChange={handleProgressChange}
          />
        );
      case 'keyboard':
        return <IPAKeyboard settings={settings} />;
      case 'progress':
        return <ProgressView progress={progress} settings={settings} />;
      case 'search':
        return (
          <SearchView
            settings={settings}
            onSelectSymbol={(symbol) => setSelectedSymbol(symbol)}
          />
        );
      case 'settings':
        return (
          <SettingsView
            settings={settings}
            onSettingsChange={handleSettingsChange}
            onProgressChange={handleProgressChange}
          />
        );
      default:
        return (
          <HomeScreen
            progress={progress}
            settings={settings}
            onNavigate={(tab) => setCurrentTab(tab)}
            onSelectSymbol={(symbol) => setSelectedSymbol(symbol)}
          />
        );
    }
  };

  return (
    <AppLayout
      currentTab={currentTab}
      onTabChange={(tab) => setCurrentTab(tab)}
      settings={settings}
    >
      {renderTabContent()}

      {/* Symbol Detail Bottom Sheet / Modal */}
      {selectedSymbol && (
        <SymbolDetail
          symbol={selectedSymbol}
          settings={settings}
          progress={progress}
          onClose={() => setSelectedSymbol(null)}
          onProgressChange={handleProgressChange}
        />
      )}
    </AppLayout>
  );
}

export default App;
