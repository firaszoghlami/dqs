SELECT [id]
        , [title]
        , [description]
        , [startDate]
        , [endTime]
FROM    [dbo].[events]
WHERE   [userId] = @userId
ORDER BY
        [startDate], [startTime]