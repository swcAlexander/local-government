'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = () => {
  const mapRef = useRef<any>(null);
  const [measuring, setMeasuring] = useState(false);
  const [measurementPoints, setMeasurementPoints] = useState<any[]>([]);

  useEffect(() => {
    const L = require('leaflet');
    require('leaflet/dist/leaflet.css');
    require('leaflet-draw/dist/leaflet.draw.css');
    require('leaflet-measure/dist/leaflet-measure.css');
    require('leaflet-geometryutil');
    require('leaflet-draw');

    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: [51.1601, 25.789],
        zoom: 13,
      });

      L.Icon.Default.mergeOptions({
        iconUrl: '/marker-icon-2x.png',
        shadowUrl: '/marker-shadow.png',
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
        detectRetina: true,
      }).addTo(mapRef.current);

      L.marker([51.1601, 25.789])
        .addTo(mapRef.current)
        .bindPopup('Це Куликовичі');

      const drawnItems = new L.FeatureGroup();
      mapRef.current.addLayer(drawnItems);

      const drawControl = new L.Control.Draw({
        edit: {
          featureGroup: drawnItems,
        },
        draw: {
          polygon: {
            allowIntersection: false,
            showArea: true,
          },
          polyline: {},
          circle: false,
          rectangle: {},
          marker: {},
        },
      });
      mapRef.current.addControl(drawControl);

      mapRef.current.on(L.Draw.Event.CREATED, (event: any) => {
        const layer = event.layer;
        drawnItems.addLayer(layer);

        if (event.layerType === 'marker') {
          layer
            .bindPopup('<b>Нова точка!</b><br>Координати: ' + layer.getLatLng())
            .openPopup();
        } else if (
          event.layerType === 'polygon' ||
          event.layerType === 'rectangle'
        ) {
          const area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
          layer
            .bindPopup('<b>Площа:</b> ' + area.toFixed(2) + ' м²')
            .openPopup();
        } else if (event.layerType === 'polyline') {
          const length = layer
            .getLatLngs()
            .reduce((acc: number, point: any, index: number, arr: any[]) => {
              if (index === 0) return acc;
              return acc + point.distanceTo(arr[index - 1]);
            }, 0);
          layer
            .bindPopup('<b>Довжина:</b> ' + length.toFixed(2) + ' м')
            .openPopup();
        }
      });

      mapRef.current.on(L.Draw.Event.EDITED, (event: any) => {
        event.layers.eachLayer((layer: any) => {
          layer.bindPopup("<b>Об'єкт змінено!</b>").openPopup();
        });
      });

      mapRef.current.on(L.Draw.Event.DELETED, () => {
        alert("Об'єкт видалено!");
      });

      mapRef.current.on('click', (e: any) => {
        if (measuring) {
          const latlng = e.latlng;
          setMeasurementPoints((prevPoints) => [...prevPoints, latlng]);
          L.marker(latlng)
            .addTo(mapRef.current)
            .bindPopup('Точка: ' + latlng)
            .openPopup();
        }
      });
    }

    // Очищення при демонтажі компонента
    return () => {
      if (mapRef.current) {
        mapRef.current.off(); // Видаляємо всі обробники подій
        mapRef.current.remove(); // Видаляємо карту
        mapRef.current = null; // Очищаємо посилання
      }
    };
  }, [measuring]);

  const toggleMeasurement = () => {
    setMeasuring((prev) => !prev);
    if (!measuring) {
      setMeasurementPoints([]);
      alert(
        'Клікніть на карту, щоб додати точки. Клацніть знову, щоб завершити вимірювання.'
      );
    } else {
      const totalDistance = measurementPoints.reduce((acc, point, index) => {
        if (index === 0) return acc;
        return acc + point.distanceTo(measurementPoints[index - 1]);
      }, 0);
      alert('Загальна відстань: ' + totalDistance.toFixed(2) + ' метри');
    }
  };

  return (
    <section className="container column">
      <h1 className="hidden">OpenStreetMap</h1>
      <div id="map" style={{ height: '500px', zIndex: 1 }}></div>
      <button
        id="toggle-measure"
        className="hidden"
        onClick={toggleMeasurement}>
        {measuring ? 'Завершити вимірювання' : 'Почати вимірювання'}
      </button>
      <div id="measure-result" style={{ display: 'none' }}></div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });
