import notifee, {RepeatFrequency, TriggerType, EventType} from '@notifee/react-native';
import notificationInfo from './notificationInfo';

class NotificationService {
  static #userPressEvents = [
    EventType.TRIGGER_NOTIFICATION_CREATED,
    EventType.PRESS
  ]

  static isUserPressed(eventType) {
    return this.#userPressEvents.includes(eventType);
  }

  static async #requestPermissionForIOS() {
    notifee.requestPermission();
  }

  static async #createChannelForAndroid() {
    notifee.createChannel({
      id: notificationInfo.ANDROID_CHANNEL_ID,
      name: notificationInfo.ANDROID_CHANNEL_NAME,
    });
  }

  static async createNotification(date) {
    await this.#requestPermissionForIOS();
    await this.#createChannelForAndroid();

    if (date === undefined) {
      date = new Date(Date.now());
      date.setHours(date.getHours() + 1)
      date.setMinutes(0)
      date.setSeconds(0)
    }
    console.log('Notification date:', date);

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrequency: RepeatFrequency.DAILY
    };

    try{
      await notifee.createTriggerNotification(
      {
        id: 'brainee_reminder',
        title: notificationInfo.TITLE,
        body: notificationInfo.CONTENT,
        android: {
          channelId: notificationInfo.ANDROID_CHANNEL_ID,
          smallIcon: notificationInfo.ANDROID_SMALL_ICON,
          pressAction: {
            id: 'default',
          },
        },
      },
      trigger,
    );
    } catch (err) {
      console.log("Error occurred while creating the notification: ", err)
    }
  }
}

export default NotificationService;
