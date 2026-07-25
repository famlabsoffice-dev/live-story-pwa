# Final Architecture Snapshot: live-story-pwa v0.8.0-module8

## 1. Einleitung

Dieses Dokument beschreibt die Architektur der `live-story-pwa` Anwendung zum Zeitpunkt des Releases `v0.8.0-module8`. Die Anwendung ist eine Progressive Web App (PWA), die darauf ausgelegt ist, interaktive Storytelling-Erlebnisse zu ermöglichen, wobei ein starker Fokus auf künstliche Intelligenz (KI), Medienverarbeitung und robuste Datensynchronisation liegt.

## 2. Gesamtarchitektur

Die `live-story-pwa` folgt einer modernen Frontend-Architektur, die stark auf clientseitige Verarbeitung und Offline-Fähigkeiten setzt. Sie ist modular aufgebaut, um eine hohe Wartbarkeit und Skalierbarkeit zu gewährleisten. Die Kernkomponenten umfassen eine reichhaltige Benutzeroberfläche, eine umfassende Domänenlogik, spezialisierte Dienste für KI und Medien sowie eine robuste Datenpersistenz- und Synchronisationsschicht.

## 3. Schlüsselarchitekturschichten und -domänen

Die Architektur kann in mehrere logische Schichten unterteilt werden, die jeweils spezifische Verantwortlichkeiten tragen:

### 3.1. Benutzeroberfläche (UI-Schicht)

Die Benutzeroberfläche der Anwendung wird durch wiederverwendbare React-Komponenten im Verzeichnis `src/components` aufgebaut. Diese Komponenten bilden die visuellen Bausteine der `live-story-pwa`. Für die Sicherstellung von Konsistenz und Barrierefreiheit, insbesondere im Hinblick auf die Benutzerfreundlichkeit für ältere Nutzer, sind Design-System-Elemente und UX-Prinzipien in `src/design-system` definiert, wie beispielsweise in `seniorUX.ts` ersichtlich. Ergänzend dazu werden in `src/hooks` benutzerdefinierte React-Hooks bereitgestellt, die der Kapselung und Wiederverwendung von UI-bezogener Logik und Zustandsverwaltung dienen, wie der `useReadingMode.ts` Hook.

### 3.2. Anwendungsschicht

Die Anwendungsschicht, primär im Verzeichnis `src/application` angesiedelt, ist für die Koordination der Interaktionen zwischen der Benutzeroberfläche und den darunterliegenden Domänen- und Dienstschichten zuständig. Sie beherbergt die anwendungsspezifische Logik, die den Fluss der Daten und die Ausführung von Prozessen steuert. Ergänzend dazu werden in `src/providers` React Context Provider bereitgestellt, die globale Zustände, Dienste oder Konfigurationen wie `app-provider.tsx` und `enterprise-provider.tsx` für die gesamte Komponentenstruktur zugänglich machen und somit eine effiziente Datenweitergabe ermöglichen.

### 3.3. Domänenschicht

Die `src/domain` Schicht bildet das Herzstück der Geschäftslogik und ist in spezifische Domänen unterteilt, um eine klare Trennung der Verantwortlichkeiten zu gewährleisten. Die **`ai`**-Domäne definiert die Kernarchitektur für KI-Agenten und orchestriert KI-Workflows, wie in Dateien wie `agentArchitecture.ts`, `aiOrchestrator.ts` und `storyIntelligencePipeline.ts` ersichtlich. Die **`media`**-Domäne ist für die Verwaltung und Darstellung von Medienobjekten zuständig, während **`memory`** und **`memoryGraph`** die Speicherung, Organisation und den Abruf von Erinnerungen und deren Beziehungen in einem Graphen verantworten. Dies ist entscheidend für die Story-Intelligenz und wird durch Komponenten wie `memoryGraphCore.ts`, `memoryRetrievalEngine.ts`, `relationshipIntelligence.ts` und `privacyBoundary.ts` realisiert. Die **`presentation`**-Domäne befasst sich mit der Logik zur Darstellung von Geschichten und Timelines, wie in `storyPresentation.ts` und `timeline.ts` implementiert. Darüber hinaus gibt es spezifische Domänen für den **`export`** von Daten, beispielsweise `lifeBookExport.ts`, und die **`interview`**-Logik.

### 3.4. Dienstschicht

Die `src/services` Schicht ist für die Implementierung der Geschäftslogik und die Orchestrierung komplexerer Operationen zuständig, wobei sie oft die Domänenmodelle nutzt. Sie umfasst umfassende Dienste für KI-gesteuerte Funktionen wie adaptive Interviews, Story-Komposition, Entitätsextraktion, Konfidenzbewertung und personalisiertes Story-Reasoning, die in den Bereichen **`ai-agent`**, **`ai-orchestration`**, **`story-ai`**, **`story-intelligence`** und **`story-reasoning`** gebündelt sind. Weiterhin bietet sie Dienste für Audioaufnahme, Transkription (z.B. `transcriptionService.ts`), Medienverarbeitung (Komprimierung, Caching, Synchronisation) und Thumbnail-Generierung unter **`audio`**, **`transcription`** und **`media`**. Für den Export von Inhalten, insbesondere in PDF-Formate, sind Dienste unter **`export`** und **`pdf`** (z.B. `pdfExportService.ts`, `lifeBookRenderer.ts`) vorhanden. Die Überwachung und Optimierung der Anwendungsleistung sowie die Fehlerberichterstattung werden durch **`performance`** und **`diagnostics`** abgedeckt. Die Verwaltung von Datenschutzgrenzen und -richtlinien erfolgt durch **`privacy-orchestration`**, während **`syncService`** die Datensynchronisation mit Backend-Systemen koordiniert.

### 3.5. Datenzugriffsschicht

Die Datenzugriffsschicht abstrahiert den Zugriff auf die persistenten Daten der Anwendung. Das Verzeichnis **`src/repositories`** bietet eine einheitliche Schnittstelle für den Zugriff auf verschiedene Entitäten, wie `storyRepository.ts`, `mediaRepository.ts` und `memoryRepository.ts`. Die eigentliche Implementierung der lokalen Datenbank, die hauptsächlich auf Dexie (einem Wrapper für IndexedDB) basiert, befindet sich in **`src/database`**. Dies ermöglicht Offline-Fähigkeiten und schnelle Datenzugriffe, wie in `dexieDb.ts` und `offlineCrud.ts` veranschaulicht.

### 3.6. Plattformschicht

Die Plattformschicht bündelt infrastrukturelle und anwendungsübergreifende Funktionen. Unter **`src/platform/pwa`** sind PWA-spezifische Implementierungen wie Service Worker (`service-worker.ts`) und Manifest-Konfigurationen zu finden, die die Offline-Fähigkeiten und die Installierbarkeit der Anwendung sicherstellen. **`src/platform/sync`** ist für die Handhabung der Datensynchronisation zuständig, einschließlich Konfliktlösung (`conflictResolver.ts`) und der Verwaltung der Synchronisationswarteschlange (`syncQueue.ts`). Diagnostische Funktionen wie Logging (`logger.ts`), Health Checks (`healthCheck.ts`) und Performance-Metriken sind in **`src/platform/diagnostics`** implementiert. Schließlich enthält **`src/platform/migration`** die Logik für Datenmigrationen und Schema-Upgrades, wie in `migrationRunner.ts` definiert, um die Datenbankstruktur bei Bedarf anzupassen.

### 3.7. Sicherheitsschicht

Die Sicherheitsschicht, die im Verzeichnis **`src/security`** angesiedelt ist, umfasst Dienste für die Datenverschlüsselung und -entschlüsselung. Dies ist besonders relevant für Mediendaten, wobei spezifische Implementierungen wie `encryptionService.ts`, `mediaEncryption.ts` und `mediaMetadata.ts` zum Einsatz kommen, um die Vertraulichkeit und Integrität der Daten zu gewährleisten.

## 4. Wichtige Technologien

Die `live-story-pwa` basiert auf einem modernen Technologie-Stack, der auf Effizienz und Skalierbarkeit ausgelegt ist. Als **Frontend-Framework** kommt React in Kombination mit TypeScript zum Einsatz, was eine robuste und typsichere Entwicklung ermöglicht. Für das **Styling** wird TailwindCSS verwendet, dessen Konfiguration in `tailwind.config.ts` zu finden ist und eine utility-first CSS-Entwicklung fördert. Die **lokale Datenhaltung** wird durch Dexie.js realisiert, einem Wrapper für IndexedDB, der Offline-Fähigkeiten und schnelle Datenzugriffe gewährleistet. Das **Build-Tool** der Wahl ist Vite, wie durch `vite.config.ts` indiziert, welches für seine schnelle Entwicklungsumgebung und optimierte Builds bekannt ist. Die **Teststrategie** stützt sich auf Vitest für Unit- und Integrationstests sowie Playwright für End-to-End-Tests. Als **Paketmanager** wird pnpm eingesetzt, und die **Continuous Integration/Continuous Deployment (CI/CD)**-Pipelines sind mittels GitHub Actions in `.github/workflows` konfiguriert.

## 5. Datenfluss und Interaktionen

Der Datenfluss in der `live-story-pwa` ist typischerweise unidirektional, beginnend bei Benutzerinteraktionen in der UI. Diese lösen Aktionen in der Anwendungsschicht aus, die wiederum Domänenlogik und Dienste aufrufen. Dienste interagieren mit den Repositories, um Daten aus der lokalen Datenbank abzurufen oder zu speichern. Änderungen werden über die Synchronisationsschicht mit einem potenziellen Backend abgeglichen. KI-Dienste verarbeiten Daten asynchron und liefern Ergebnisse zurück an die Domänen- oder Anwendungsschicht.

## 6. Teststrategie

Die `live-story-pwa` verfügt über eine umfassende Teststrategie, die verschiedene Ebenen abdeckt, um die Qualität und Zuverlässigkeit der Anwendung sicherzustellen. **Unit- und Integrationstests** sind im Verzeichnis `src/test` angesiedelt, wobei beispielsweise `mediaEncryption.test.ts` die korrekte Funktionalität der Medienverschlüsselung überprüft. Darüber hinaus werden **End-to-End-Tests** mit Playwright im `tests`-Verzeichnis durchgeführt. Diese umfassen spezialisierte Tests für Barrierefreiheit (`accessibility`), die Kompatibilität mit verschiedenen Geräten (`devices`), die Erkennung von Regressionen (`regression`), die Anpassungsfähigkeit des Responsive Designs (`responsive`) und die allgemeine Benutzererfahrung (`ux`).

## 7. Ausblick auf Modul 9 / Zukünftige Evolution

Die bestehende Architektur der `live-story-pwa` bildet eine robuste Basis für zukünftige Entwicklungen. Im Hinblick auf Modul 9 und darüber hinausgehende Iterationen könnten die folgenden strategischen Bereiche im Vordergrund stehen:

Eine **Erweiterung der KI-Fähigkeiten** ist denkbar, indem weitere KI-Modelle integriert oder komplexere Reasoning-Engines implementiert werden, um die Intelligenz der Story-Erstellung weiter zu vertiefen. Parallel dazu ist eine **Verbesserung der Synchronisationsmechanismen** von Bedeutung, um die Konfliktlösung zu optimieren und die Performance bei der Datenreplikation zu steigern, was für eine nahtlose Benutzererfahrung entscheidend ist. Des Weiteren könnte die **Erweiterung der Medienformate** durch die Unterstützung neuer Medienarten oder komplexerer Medienbearbeitungsfunktionen die kreativen Möglichkeiten der Anwendung erweitern. Schließlich ist eine kontinuierliche **Skalierung der PWA-Funktionen** anzustreben, um die Offline-Nutzung und die Performance auf einer Vielzahl von Geräten weiter zu optimieren und die Reichweite der Anwendung zu vergrößern.

Dieses Dokument dient als Referenzpunkt für die weitere Entwicklung und das Verständnis der Systemlandschaft.
