/*
structure:
    nav bar: - STANDALONE COMPONENT
        -title for the app
        - toggle between edit mode and preview

    main: - STANDALONE COMPONENT
        - sidebar: - STANDALONE COMPONENT
            - name * required
            - image * required
            - contact information ( conditionally rendered ):
                - email address * required
                - prone number * required
                - linkedin ( conditionally rendered )
                - github ( conditionally rendered )
                - address ( conditionally rendered )
        - body: - STANDALONE COMPONENT
            - summary * required
            - skills ( unordered list ) *required
            - work experience * required
                - job(s):
                    - position * required
                    - duration ( option to choose ongoing ) * required
                    - location * required
                    - short description ( conditionally rendered )
            - education:
                - title * required
                - issuer / institution * required
                - short description ( conditionally rendered )

    footer bar - STANDALONE COMPONENT
        - copywrite message
        - download link for pdf
*/
