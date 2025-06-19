import { DigitalClock } from '@/components/digital-clock';
import { PomodoroTimer } from '@/components/pomodoro-timer';
import { Timer } from '@/components/stopwatch';
import { MusicController } from '@/components/music-controller';
import { TaskScheduler } from '@/components/task-scheduler';
import { QuickSettings } from '@/components/quick-settings';
import { DailyStats } from '@/components/daily-stats';
import { NotificationToast, useToasts } from '@/components/notification-toast';

export default function Home() {
  const { toasts, removeToast } = useToasts();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
            ProductivePro
          </h1>
          <p className="text-gray-400">Your productivity companion with smartwatch experience</p>
        </header>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Left Column: Timers */}
          <div className="lg:col-span-2 space-y-6">
            <DigitalClock />
            <PomodoroTimer />
            <Timer />
          </div>

          {/* Right Column: Tasks & Music */}
          <div className="space-y-6">
            <MusicController />
            <TaskScheduler />
            <QuickSettings />
          </div>
        </div>

        {/* Daily Stats Summary */}
        <DailyStats />

        {/* Notification Toast Container */}
        <NotificationToast toasts={toasts} onRemove={removeToast} />
      </div>
    </div>
  );
}
