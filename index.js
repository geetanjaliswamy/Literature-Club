
google.books.load();

      function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load('ISBN:9780241202432');
        viewer.load('ISBN:9780525505167');
        viewer.load('ISBN:9780882849638');
      }

      google.books.setOnLoadCallback(initialize);
