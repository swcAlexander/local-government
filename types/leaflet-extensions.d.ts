
import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Draw {
    // Декларації для об'єктів Draw, якщо потрібно більше деталей
    class Event {
      static CREATED: string;
      static EDITED: string;
      static DELETED: string;
    }

    interface DrawOptions {
      polygon?: any;
      polyline?: any;
      rectangle?: any;
      marker?: any;
      circle?: any;
    }

    class Control {
      constructor(options?: { edit: any; draw: DrawOptions });
    }
  }

  // Розширення для GeometryUtil
  namespace GeometryUtil {
    function geodesicArea(latlngs: L.LatLng[]): number;
  }
}